const https = require('https');
const { execSync } = require('child_process');

const token = process.env.GITHUB_TOKEN;
const repoName = 'EFESO-Landingpage-Chemie';

if (!token) {
  console.error('GITHUB_TOKEN env variable not set');
  process.exit(1);
}

const req = https.request('https://api.github.com/user/repos', {
  method: 'POST',
  headers: {
    'Authorization': `token ${token}`,
    'User-Agent': 'Node.js',
    'Content-Type': 'application/json'
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    if (res.statusCode === 201 || res.statusCode === 422) { // 201 Created, 422 Already Exists
      console.log('Repository ready.');
      // Initialize Git locally and push
      try {
        execSync('git init', { stdio: 'inherit' });
        execSync('git add .', { stdio: 'inherit' });
        execSync('git commit -m "Initial commit for V3 Landingpage"', { stdio: 'inherit' });
        execSync('git branch -M main', { stdio: 'inherit' });
        execSync(`git remote add origin https://${token}@github.com/SebiPX/${repoName}.git`, { stdio: 'inherit' });
        execSync('git push -u origin main -f', { stdio: 'inherit' });
        console.log('Successfully pushed to GitHub!');
      } catch (err) {
        console.log('Git error: ' + err.message);
      }
    } else {
      console.error('Failed to create repo', res.statusCode, data);
    }
  });
});

req.on('error', err => console.error(err));
req.write(JSON.stringify({
  name: repoName,
  private: true,
  description: 'EFESO Landingpage V3'
}));
req.end();
