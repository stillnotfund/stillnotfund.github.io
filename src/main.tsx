import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AppleSupport from './AppleSupport.tsx'

const pathname = window.location.pathname

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {pathname === '/support/apple' ? <AppleSupport /> : <App />}
  </StrictMode>,
)
