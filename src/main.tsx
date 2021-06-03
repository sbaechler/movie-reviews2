import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './app/App'

if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('./mock-worker')
    worker.start()
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
