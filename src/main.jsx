import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PixabayContext from './context/PixabayContext.jsx'
import PixabayState from './context/PixabayState.jsx'

createRoot(document.getElementById('root')).render(
  <PixabayState>
    <App />
  </PixabayState>,
)
