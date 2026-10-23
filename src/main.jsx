
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './About.jsx'

const isAboutPage = window.location.pathname.replace(/\/+$/, '') === '/about'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isAboutPage ? <About /> : <App />}
  </StrictMode>,
)
