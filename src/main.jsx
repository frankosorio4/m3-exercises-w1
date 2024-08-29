import { RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import "./index.css"
import { routes } from './routers/router.jsx'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}> </RouterProvider>
)
