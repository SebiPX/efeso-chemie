#!/bin/bash

# Navigate to the script's directory to ensure commands run in the correct context
cd "$(dirname "$0")"

echo "====================================="
echo "   EFESO Landingpage Deployment      "
echo "====================================="

echo "[1/3] Pulling latest changes from GitHub..."
git pull origin main

echo "[2/3] Stopping existing Docker containers..."
docker compose down

echo "[3/3] Building and starting new containers..."
docker compose up -d --build

echo "====================================="
echo "   Deployment completed!             "
echo "====================================="
