const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
  // create a new window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    center: true,
    minHeight: 600,
    minWidth: 500,
    webPreferences: { nodeIntegration: true, devTools: false },
  });

  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.resolve(__dirname, '..', 'build', 'index.html'),// path HTML file rendered of React
      protocol: 'file:',
      slashes: true,
    });
  mainWindow.removeMenu();
  mainWindow.loadURL(startUrl);

  // To close window, close application together.
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Fire event to window created
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // Evento disparado para criar a janela da aplicação.
  if (mainWindow === null) {
    createWindow();
  }
});