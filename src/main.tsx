import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.js'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.js'

import { GlobalStyle } from './styles/global.js'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
