const electron = require('electron');

const createWindow = () => {
    const win = new electron.BrowserWindow({ width: 800, height: 600 });
    win.loadFile('index.html');
}

electron.app.on('ready', createWindow);