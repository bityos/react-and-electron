const { app, BrowserWindow } = require('electron')
const path = require('path');
const isDev = require('electron-is-dev');

const createWindow = () => {
    let win = new BrowserWindow({
        width: 1080,
        height: 850,
        webPreferences: {
        nodeIntegration: true
        }
    })
    win.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
    win.on('closed', () => win = null);
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
