import { createContext, useEffect, useState } from "react"

export const FetchContext = createContext();

export const FetchContextProvider = ({ children }) => {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        readUser()
    },[])

    function readUser() {
        fetch("http://localhost:3000/listaUsuarios")
            .then(response => response.json())
            .then(response => setUsuarios(response))
            .catch(error => console.log(error))
    }

    function registerUser(dataUser) {
        fetch(
            "http://localhost:3000/listaUsuarios", {
            method: 'POST',
            body: JSON.stringify(dataUser),
            header: {
                'Context-Type': 'application/json'
            }
        }
        )
        .then(() => {
                alert('Usuario Cadastrado com sucesso.')
                readUser()
            }
        )
        .catch(() => alert('Erro ao cadastrar o Usuario.'))
    }

    return (
        <FetchContext.Provider value={{usuarios, readUser, registerUser }}>
            {children}
        </FetchContext.Provider>
    )
}