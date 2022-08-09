const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  getUsers: () => ipcRenderer.invoke('getUsers'),
})
