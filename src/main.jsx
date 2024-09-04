import { RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import "./index.css"
import { routes } from './routers/router.jsx'
import { FetchContextProvider } from './context/Fetch/Fetch.jsx'

createRoot(document.getElementById('root')).render(
  <FetchContextProvider>
    <RouterProvider router={routes}>
    </RouterProvider>
  </FetchContextProvider>
)
