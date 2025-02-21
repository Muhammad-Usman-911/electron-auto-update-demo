
# electron-auto-update-demo
=======
# Electron Auto-Update Demo

A simple demonstration of implementing auto-updates in an Electron application using `electron-updater`.

## Features

- Automatic update checking on application startup
- User notification when updates are available
- One-click update installation
- Version display and tracking

## Installation

Clone this repository:
```bash
git clone https://github.com/yourusername/electron-auto-update-demo.git
cd electron-auto-update-demo
```

Install dependencies:
```bash
npm install
```

## Development

Start the app in development mode:
```bash
npm start
```

## Building and Publishing

Build without publishing:
```bash
npm run build
```

Build and publish:
```bash
GH_TOKEN=your_github_token npm run deploy
```

## Auto-Update Implementation Guide

### How Auto-Updates Work

The auto-update system in this demo:
1. Checks for updates when the app starts (`autoUpdater.checkForUpdatesAndNotify()`)
2. Notifies the user when updates are available
3. Downloads updates automatically in the background
4. Provides a "Restart" button to install updates

### Key Files

- **main.js**: Contains the main process code and auto-update logic
- **renderer.js**: Handles the UI for update notifications
- **package.json**: Configures electron-builder and version information

### Auto-Update Workflow

1. The installed application checks for updates using the version in package.json
2. When a higher version is published to the GitHub repository, the app detects it
3. The update is downloaded automatically
4. The user is prompted to restart the app to apply the update

### Testing Auto-Updates

To test the auto-update functionality:

1. Build and publish version 1.0.0:
   ```bash
   GH_TOKEN=your_github_token npm run deploy
   ```

2. Install the built application on your testing device

3. Update the version in package.json to 1.0.1

4. Build and publish the new version:
   ```bash
   GH_TOKEN=your_github_token npm run deploy
   ```

5. The installed 1.0.0 version should detect and offer to update to 1.0.1

## FAQ

**Q: Does the auto-updater automatically detect new versions?**
A: Yes, the `autoUpdater` from `electron-updater` automatically checks your GitHub repository for newer versions based on the version number in package.json.

**Q: Do I need to manually check versions?**
A: No, version checking is automatic. Just make sure to increment your version number in package.json before building a new release.

**Q: How does the app know an update is available?**
A: The auto-updater compares the current app's version (from package.json) with the latest release version in your GitHub repository.

## Configuration

The auto-update configuration is in the `build` section of package.json:

```json
"build": {
  "publish": [
    {
      "provider": "github",
      "owner": "yourusername",
      "repo": "electron-auto-update-demo"
    }
  ]
}
```

## License

MIT
>>>>>>> ba887ff (Initial commit)
<<<<<<< HEAD
# electron-auto-update-demo
=======
# Electron Auto-Update Demo

A simple demonstration of implementing auto-updates in an Electron application using `electron-updater`.

## Features

- Automatic update checking on application startup
- User notification when updates are available
- One-click update installation
- Version display and tracking

## Installation

Clone this repository:
```bash
git clone https://github.com/yourusername/electron-auto-update-demo.git
cd electron-auto-update-demo
```

Install dependencies:
```bash
npm install
```

## Development

Start the app in development mode:
```bash
npm start
```

## Building and Publishing

Build without publishing:
```bash
npm run build
```

Build and publish:
```bash
GH_TOKEN=your_github_token npm run deploy
```

## Auto-Update Implementation Guide

### How Auto-Updates Work

The auto-update system in this demo:
1. Checks for updates when the app starts (`autoUpdater.checkForUpdatesAndNotify()`)
2. Notifies the user when updates are available
3. Downloads updates automatically in the background
4. Provides a "Restart" button to install updates

### Key Files

- **main.js**: Contains the main process code and auto-update logic
- **renderer.js**: Handles the UI for update notifications
- **package.json**: Configures electron-builder and version information

### Auto-Update Workflow

1. The installed application checks for updates using the version in package.json
2. When a higher version is published to the GitHub repository, the app detects it
3. The update is downloaded automatically
4. The user is prompted to restart the app to apply the update

### Testing Auto-Updates

To test the auto-update functionality:

1. Build and publish version 1.0.0:
   ```bash
   GH_TOKEN=your_github_token npm run deploy
   ```

2. Install the built application on your testing device

3. Update the version in package.json to 1.0.1

4. Build and publish the new version:
   ```bash
   GH_TOKEN=your_github_token npm run deploy
   ```

5. The installed 1.0.0 version should detect and offer to update to 1.0.1

## FAQ

**Q: Does the auto-updater automatically detect new versions?**
A: Yes, the `autoUpdater` from `electron-updater` automatically checks your GitHub repository for newer versions based on the version number in package.json.

**Q: Do I need to manually check versions?**
A: No, version checking is automatic. Just make sure to increment your version number in package.json before building a new release.

**Q: How does the app know an update is available?**
A: The auto-updater compares the current app's version (from package.json) with the latest release version in your GitHub repository.

## Configuration

The auto-update configuration is in the `build` section of package.json:

```json
"build": {
  "publish": [
    {
      "provider": "github",
      "owner": "yourusername",
      "repo": "electron-auto-update-demo"
    }
  ]
}
```

## License

