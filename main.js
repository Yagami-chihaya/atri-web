import { app, BrowserWindow,ipcMain} from 'electron/main'
import path from 'node:path'
const __dirname = path.resolve()
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences:{
        preload:path.join(__dirname,'/preload/index.js')
    }
  })

  win.loadURL('http://localhost:5173')


}

app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})