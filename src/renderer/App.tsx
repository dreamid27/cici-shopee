import Versions from './components/Versions'
import { Button } from './components/ui/button'

function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  const openDevTools = (): void => window.electron.ipcRenderer.send('open-devtools')

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center">
      <header className="w-full max-w-3xl px-6 pt-10 pb-6 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          Welcome to your Electron + React Starter
        </h1>
        <p className="mt-2 text-gray-600">
          A minimal boilerplate with TypeScript and Tailwind CSS.
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <span className="px-2.5 py-1 text-xs rounded bg-blue-50 text-blue-700 border border-blue-200">
            Electron
          </span>
          <span className="px-2.5 py-1 text-xs rounded bg-cyan-50 text-cyan-700 border border-cyan-200">
            React
          </span>
          <span className="px-2.5 py-1 text-xs rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
            TypeScript
          </span>
          <span className="px-2.5 py-1 text-xs rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
            Tailwind
          </span>
        </div>
      </header>

      <main className="w-full max-w-3xl px-6">
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-medium">Get started</h2>
          <ol className="mt-3 list-decimal list-inside text-sm text-gray-700 space-y-1">
            <li>Press F12 to open DevTools or use the button below.</li>
            <li>
              Edit <code>src/renderer/src/App.tsx</code> and <code>src/renderer/src/index.css</code>{' '}
              to customize.
            </li>
            <li>Use the buttons to test IPC and open documentation.</li>
          </ol>

          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              onClick={ipcHandle}
              className="inline-flex items-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700 active:bg-emerald-800 transition"
            >
              Send IPC (ping)
            </Button>
            <Button
              onClick={openDevTools}
              className="inline-flex items-center rounded-md bg-slate-700 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800 active:bg-slate-900 transition"
            >
              Open DevTools
            </Button>
            <a
              href="https://electron-vite.org/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-700 border border-slate-200 hover:bg-slate-50 transition"
            >
              Docs
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-700 border border-slate-200 hover:bg-slate-50 transition"
            >
              Repository
            </a>
          </div>
        </section>

        <p className="mt-4 text-xs text-gray-500 text-center">
          Tip: You can always press F12 to open DevTools.
        </p>

        <div className="mt-8">
          <Versions />
        </div>
      </main>

      <footer className="mt-auto w-full max-w-3xl px-6 py-6 text-center text-xs text-gray-500">
        Powered by electron-vite. Happy building!
      </footer>
    </div>
  )
}

export default App
