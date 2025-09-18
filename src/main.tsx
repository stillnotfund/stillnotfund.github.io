import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AppleSupport from './AppleSupport.tsx'

// Restore original path if redirected from GitHub Pages 404.html
const url = new URL(window.location.href)
const redirectedFrom = url.searchParams.get('redirected_from')
if (redirectedFrom) {
  const targetUrl = new URL(redirectedFrom, window.location.origin)
  if (window.location.pathname !== targetUrl.pathname || window.location.hash !== targetUrl.hash) {
    window.history.replaceState({}, '', targetUrl.pathname + targetUrl.search + targetUrl.hash)
  }
}

const pathname = window.location.pathname

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {pathname === '/support/apple' ? <AppleSupport /> : <App />}
  </StrictMode>,
)
