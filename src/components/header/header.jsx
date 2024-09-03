// import { TextField, Button } from "@mui/material"
import { Link } from "react-router-dom"
import style from './header.module.css'
import { useNavigate } from "react-router-dom";


export function Header() {

    const navigate = useNavigate();

    const logout = () => {
        if (confirm("Você deseja sair da sua conta")){
            localStorage.removeItem('isLogged');
            localStorage.removeItem('idUserLogged');
            localStorage.removeItem('userName')
            navigate("/login")
        }
    }

    return (
        <div className={style.container}>
            <nav className={style.navHeader}>
                <div className={style.navDivHeader}>
                    <Link to='/'>Home</Link>
                    <Link to='/rota1'>Rota 1</Link>
                    <Link to='/rota2'>Rota 2</Link>
                </div>
                <Link to="#" onClick={logout}>Logout</Link>
            </nav>
        </div>
    )
}