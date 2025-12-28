import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app.jsx'
import './style.css'

const rootEl = document.getElementById('app')
if (!rootEl) throw new Error('Root element #app not found')

const root = createRoot(rootEl)
root.render(<App />)
