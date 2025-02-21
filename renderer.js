// renderer.js
const { ipcRenderer } = require('electron');
const pkg = require('./package.json');

// Display current version
document.getElementById('version-number').innerText = pkg.version;

let downloadInProgress = false;

// Add status message function
function showStatus(message, isError = false) {
  const statusDiv = document.getElementById('status-message');
  statusDiv.textContent = message;
  statusDiv.className = isError ? 'status-error' : 'status-success';
  statusDiv.style.display = 'block';
  
  // Hide status after 5 seconds
  setTimeout(() => {
    statusDiv.style.display = 'none';
  }, 5000);
}

// Update checking
ipcRenderer.on('update_checking', () => {
  showStatus('Checking for updates...');
});

// Update available
ipcRenderer.on('update_available', (event, info) => {
  document.getElementById('update-available').style.display = 'block';
  document.getElementById('update-downloaded').style.display = 'none';
  document.getElementById('update-btn').disabled = false;
  document.getElementById('update-btn').innerText = 'Update Available!';
  showStatus(`Update v${info.version} is available!`);
});

// Update not available
ipcRenderer.on('update_not_available', () => {
  if (!downloadInProgress) {
    document.getElementById('update-btn').innerText = 'No Updates Available';
    document.getElementById('update-btn').disabled = true;
    showStatus('Your app is up to date!');
  }
});

// Update progress
ipcRenderer.on('update_progress', (event, progressObj) => {
  downloadInProgress = true;
  const percentage = Math.round(progressObj.percent);
  document.getElementById('update-btn').innerText = `Downloading... ${percentage}%`;
  document.getElementById('update-btn').disabled = true;
  showStatus(`Downloading update: ${percentage}%`);
});

// Update downloaded
ipcRenderer.on('update_downloaded', (event, info) => {
  downloadInProgress = false;
  document.getElementById('update-available').style.display = 'none';
  document.getElementById('update-downloaded').style.display = 'block';
  
  // Update the version number to show the new version
  document.getElementById('version-number').innerText = info.version;
  
  showStatus(`Update v${info.version} downloaded successfully! Restarting soon...`);
  
  // Automatically restart after 5 seconds
  const restartBtn = document.getElementById('restart-btn');
  let countdown = 5;
  
  restartBtn.innerText = `Restarting in ${countdown} seconds...`;
  
  const countdownInterval = setInterval(() => {
    countdown--;
    if (countdown <= 0) {
      clearInterval(countdownInterval);
      ipcRenderer.send('restart_app');
    } else {
      restartBtn.innerText = `Restarting in ${countdown} seconds...`;
    }
  }, 1000);
});

// Update error
ipcRenderer.on('update_error', (event, err) => {
  document.getElementById('update-btn').innerText = 'Update Error!';
  document.getElementById('update-btn').disabled = true;
  showStatus(`Update failed: ${err.message}`, true);
});

// Update button click handler
document.getElementById('update-btn').addEventListener('click', () => {
  ipcRenderer.send('check_for_update');
  document.getElementById('update-btn').innerText = 'Checking for updates...';
  document.getElementById('update-btn').disabled = true;
});

// Restart button click handler (for manual restart)
document.getElementById('restart-btn').addEventListener('click', () => {
  ipcRenderer.send('restart_app');
});