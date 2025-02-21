# Electron Auto-Update Demo

A simple demonstration of implementing auto-updates in an Electron application using `electron-updater`.

## Features

- Automatic update checking on application startup
- User notification when updates are available
- One-click update installation
- Version display and tracking
- GitHub Actions integration for automated builds

## Installation

Clone this repository:
```bash
git clone https://github.com/Muhammad-Usman-911/electron-auto-update-demo.git
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

### Local Building

Build without publishing:
```bash
npm run build
```

The installer (.exe) file will be available in the `dist` directory.

### GitHub Actions Automated Builds

This project includes a GitHub Actions workflow that automatically builds and publishes your app when you push a new tag.

To release a new version:
1. Update the version in `package.json`
2. Create and push a new tag:
```bash
git tag v1.0.0
git push origin v1.0.0
```

GitHub Actions will automatically:
- Build your application
- Create a new release
- Upload the installer to the release

The workflow configuration is located in `.github/workflows/build.yml`.

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
- **.github/workflows/build.yml**: GitHub Actions workflow for automated builds

### Auto-Update Workflow

1. The installed application checks for updates using the version in package.json
2. When a higher version is published to the GitHub repository, the app detects it
3. The update is downloaded automatically
4. The user is prompted to restart the app to apply the update

### Testing Auto-Updates

To test the auto-update functionality:

1. Build and release version 1.0.0 by pushing tag v1.0.0
2. Install the built application from GitHub releases
3. Update the version in package.json to 1.0.1
4. Push tag v1.0.1
5. The installed 1.0.0 version should detect and offer to update to 1.0.1

## FAQ

**Q: Does the auto-updater automatically detect new versions?**
A: Yes, the `autoUpdater` from `electron-updater` automatically checks your GitHub repository for newer versions based on the version number in package.json.

**Q: Do I need to manually check versions?**
A: No, version checking is automatic. Just make sure to increment your version number in package.json before creating a new tag and release.

**Q: How does the app know an update is available?**
A: The auto-updater compares the current app's version (from package.json) with the latest release version in your GitHub repository.

**Q: Do I need to run the build locally?**
A: No, with GitHub Actions set up, you can simply push a new tag and the build will be handled automatically in the cloud.

## Configuration

The auto-update configuration is in the `build` section of package.json:

```json
"build": {
  "publish": [
    {
      "provider": "github",
      "owner": "Muhammad-Usman-911",
      "repo": "electron-auto-update-demo"
    }
  ]
}
```

## Troubleshooting

If you encounter permission issues when building locally on Windows, try running PowerShell or Command Prompt as Administrator.

## License

MIT