import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.js'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.js'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
