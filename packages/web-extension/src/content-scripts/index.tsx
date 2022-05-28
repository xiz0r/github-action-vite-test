import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const appId = 'content-script-root'
document.getElementById(appId)?.remove()
const div = document.createElement('div')
div.setAttribute('id', appId)
document.body.appendChild(div)
createRoot(div).render(<App />)