import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  VisibleProvider } from './VisibleContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <VisibleProvider>
    <App />
  </VisibleProvider>
  ,
)
