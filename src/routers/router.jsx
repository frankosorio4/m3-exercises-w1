import { createBrowserRouter } from "react-router-dom";

import App from '../App'
import { Login } from "../pages/login/login";
import { Home } from "../pages/home/home";
import { Cadastro } from "../pages/cadastro/cadastro";
import NotFound from "../pages/notFound/notFound";

export const routes = createBrowserRouter(
    [
        {
            path:  '/Cadastro',
            element: <Cadastro/>
        },
        {
            path:  '/login',
            element: <Login/>
        },
        {
            path:  '/',
            element: (
                <App/>
            ),
            errorElement: <NotFound/>,
            children:[
                {
                    path:  '/',
                    element: <Home/>
                }
            ]
        }
    ]
)

// create not found element
// import header in app