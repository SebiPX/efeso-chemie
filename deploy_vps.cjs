const Client = require('ssh2-sftp-client');
const { Client: SSHClient } = require('ssh2');
const path = require('path');

const config = {
  host: '72.60.83.29',
  port: 22,
  username: 'root',
  password: 'Unsere-Schickeria-2026'
};

const localDir = __dirname;
const remoteDir = '/opt/docker/efeso_chemie';

async function main() {
  const sftp = new Client();
  const conn = new SSHClient();

  try {
    // 1. Establish SSH to create the folder first
    console.log('Connecting via SSH to create directory...');
    await new Promise((resolve, reject) => {
      conn.on('ready', () => {
        conn.exec(`mkdir -p ${remoteDir}`, (err, stream) => {
          if (err) reject(err);
          stream.on('close', () => resolve()).on('data', console.log).stderr.on('data', console.log);
        });
      }).on('error', reject).connect(config);
    });
    console.log('Remote directory ensured.');

    // 2. SFTP Upload
    console.log('Connect SFTP and upload files...');
    await sftp.connect(config);
    
    // Custom filter to skip node_modules and .git
    const filter = (src, isDir) => {
      const name = path.basename(src);
      if (name === 'node_modules' || name === '.git' || name === '.gemini') {
        return false;
      }
      return true;
    };

    await sftp.uploadDir(localDir, remoteDir, { filter });
    console.log('Upload complete!');
    await sftp.end();

    // 3. Docker Compose UP
    console.log('Starting Docker container...');
    await new Promise((resolve, reject) => {
      conn.exec(`cd ${remoteDir} && docker compose down && docker compose up -d --build`, (err, stream) => {
        if (err) reject(err);
        stream.on('close', () => {
          console.log('Docker setup completed.');
          resolve();
        })
        .on('data', data => console.log('OUT: ' + data))
        .stderr.on('data', data => console.log('ERR: ' + data));
      });
    });

  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    conn.end();
  }
}

main();
