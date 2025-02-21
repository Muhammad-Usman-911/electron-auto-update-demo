// renderer.js
const { ipcRenderer } = require('electron');
const pkg = require('./package.json');

// Display current version
document.getElementById('version-number').innerText = pkg.version;

// Listen for update available
ipcRenderer.on('update_available', () => {
  document.getElementById('update-available').style.display = 'block';
});

// Listen for update downloaded
ipcRenderer.on('update_downloaded', () => {
  document.getElementById('update-available').style.display = 'none';
  document.getElementById('update-downloaded').style.display = 'block';
});

// Update button click handler
document.getElementById('update-btn').addEventListener('click', () => {
  // This would typically trigger the download, but electron-updater 
  // downloads automatically, so we'll just acknowledge the click
  document.getElementById('update-btn').innerText = 'Downloading...';
  document.getElementById('update-btn').disabled = true;
});

// Restart button click handler
document.getElementById('restart-btn').addEventListener('click', () => {
  ipcRenderer.send('restart_app');
});