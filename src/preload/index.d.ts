import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: APInterface
  }
}

export interface APInterface {
  hello: () => string
}
