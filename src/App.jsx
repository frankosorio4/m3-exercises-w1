import { Outlet } from 'react-router-dom'
import { Header } from './components/header/header.jsx'
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <Outlet />
    </>
  )
}

export default App

/*
*to do
*validate user -login
* function after buton cadastro link home
*validate confirmar senha - cadastro
* function after buton cadastro link login
*/