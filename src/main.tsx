import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './GlobalStyle.tsx'
import AppRoutes from './routers/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <AppRoutes />
  </React.StrictMode>,
)
