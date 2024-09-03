import { createBrowserRouter, Navigate } from "react-router-dom";

import App from '../App'
import { Login } from "../pages/login/login";
import { Home } from "../pages/home/home";
import { Cadastro } from "../pages/cadastro/cadastro";
import { Rota1 } from "../pages/rota1/rota1";
import { Rota2 } from "../pages/rota2/rota2";
import NotFound from "../pages/notFound/notFound";

let isLogged =JSON.parse(localStorage.getItem('isLogged')) || false;

const PrivateRoute = ({children}) =>{
    return isLogged ? children : <Navigate to="/login" />
}

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
            element: (
                <PrivateRoute>
                    <App/>
                </PrivateRoute>
            ),
            errorElement: <NotFound/>,
            children:[
                {
                    path:  '/',
                    element: <Home/>
                },
                {
                    path:  '/rota1',
                    element: <Rota1/>
                },
                {
                    path:  '/rota2',
                    element: <Rota2/>
                }
            ]
        }
    ]
)