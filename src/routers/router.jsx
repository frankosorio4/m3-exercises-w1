import { createBrowserRouter } from "react-router-dom";

import App from '../App'
import { Login } from "../pages/login/login";
import { Home } from "../pages/home/home";
import { Cadastro } from "../pages/cadastro/cadastro";

export const routes = createBrowserRouter(
    [
        {
            path:  '/login',
            element: <Login/>
        },
        {
            path:  '/Cadastro',
            element: <Cadastro/>
        },
        {
            path:  '/',
            element: <App/>
        },
        {
            path:  '/home',
            element: <Home/>
        }
    ]
)