import { Link, NavLink } from "react-router-dom"
import style from './header.module.css'
import { useNavigate } from "react-router-dom";


export function Header() {

    const navigate = useNavigate();

    const logout = () => {
        if (confirm("Você deseja sair da sua conta")) {
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
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? style.active : ''}
                    >Home</NavLink>
                    <NavLink 
                        to='/rota1'
                        className={({ isActive }) => isActive ? style.active : ''}
                    >Rota 1</NavLink>
                    <NavLink 
                        to='/rota2'
                        className={({ isActive }) => isActive ? style.active : ''}
                    >Rota 2</NavLink>
                </div>
                <Link to='#' onClick={logout}>Logout</Link>
            </nav>
        </div>
    )
}