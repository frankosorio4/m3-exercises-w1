import { createBrowserRouter } from "react-router-dom";

import App from '../App'
import { Login } from "../pages/login/login";
import { Home } from "../pages/home/home";

export const routes = createBrowserRouter(
    [
        {
            path:  '/',
            element: <App/>
        },
        {
            path:  '/login',
            element: <Login/>
        },
        {
            path:  '/home',
            element: <Home/>
        }
    ]
)