import React from 'react'
import { createRoot } from 'react-dom/client';

import './index.css'
import { App } from './app/App'

if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('./mock-worker')
    worker.start()
}

const container = document.getElementById('app');
const root = createRoot(container!);

root.render(<App />);
