const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

require('electron-reload')(__dirname)

function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      devTools: true
    }
  })

  win.loadFile(path.join(__dirname, 'game', 'index.html'))
}

Menu.setApplicationMenu(null)

app.whenReady()
  .then(createWindow)

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
