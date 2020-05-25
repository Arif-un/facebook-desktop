const electron = require('electron')
const url = require('url')
const path = require('path')

const { app, BrowserWindow } = electron

let win

app.on('ready', function () {
  win = new BrowserWindow({
    width: 1200,
    transparent: true,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true
    }

  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true
  }))

})
