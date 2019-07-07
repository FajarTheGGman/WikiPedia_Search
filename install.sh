#!/usr/bin/bash
echo "[!] Installing Package..."
sleep 1
apt-get install nodejs || sudo apt-get install nodejs -y
npm install request readline chalk jsome cheerio shelljs
node wiki.js