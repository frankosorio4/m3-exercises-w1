import { RouterProvider } from 'react-router-dom'
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { routes } from './routers/router.jsx'
// import App from './App.jsx'
// import './index.css'

createRoot(document.getElementById('root')).render(

  <RouterProvider router={routes}>
  </RouterProvider>
    // <App />

)
