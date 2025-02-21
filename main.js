// main.js
const { app, BrowserWindow, ipcMain } = require('electron');
const { autoUpdater } = require('electron-updater');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
  
  // Check for updates after app is ready
  autoUpdater.checkForUpdatesAndNotify();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Enhanced auto-updater events
autoUpdater.on('checking-for-update', () => {
  mainWindow.webContents.send('update_checking');
});

autoUpdater.on('update-available', (info) => {
  mainWindow.webContents.send('update_available', info);
});

autoUpdater.on('update-not-available', () => {
  mainWindow.webContents.send('update_not_available');
});

autoUpdater.on('download-progress', (progressObj) => {
  mainWindow.webContents.send('update_progress', progressObj);
});

autoUpdater.on('update-downloaded', (info) => {
  mainWindow.webContents.send('update_downloaded', info);
});

autoUpdater.on('error', (err) => {
  mainWindow.webContents.send('update_error', err);
});

// Handle manual update check
ipcMain.on('check_for_update', () => {
  autoUpdater.checkForUpdates();
});

// Handle restart and install
ipcMain.on('restart_app', () => {
  autoUpdater.quitAndInstall(true, true);
});