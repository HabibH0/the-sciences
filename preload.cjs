const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  storage: {
    loadProgress: () => ipcRenderer.invoke('storage:load-progress'),
    saveProgress: (data) => ipcRenderer.invoke('storage:save-progress', data),
    clearProgress: () => ipcRenderer.invoke('storage:clear-progress'),
    exportProgress: () => ipcRenderer.invoke('storage:export-progress'),
    importProgress: (data) => ipcRenderer.invoke('storage:import-progress', data),
    getDeviceId: () => ipcRenderer.invoke('storage:get-device-id'),
  },
  window: {
    minimize: () => ipcRenderer.send('window:minimize'),
    toggleMaximize: () => ipcRenderer.send('window:toggle-maximize'),
    close: () => ipcRenderer.send('window:close'),
    isMaximized: () => ipcRenderer.invoke('window:is-maximized'),
    onMaximizedChanged: (callback) => {
      const listener = (event, isMaximized) => callback(isMaximized);
      ipcRenderer.on('window:maximized-changed', listener);
      return () => ipcRenderer.removeListener('window:maximized-changed', listener);
    },
  },
  sync: {
    request: (request) => ipcRenderer.invoke('sync:request', request),
  },
});
