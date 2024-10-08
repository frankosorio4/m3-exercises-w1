import { useForm } from 'react-hook-form'
import { TextField, Button } from "@mui/material"
import style from './login.module.css'
import { FetchContext } from '../../context/Fetch/Fetch'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { usuarios } = useContext(FetchContext)
    const navigate = useNavigate()

    async function onSubmitLogin1(data) {
        try{
            let usuarioExiste = false;
            let usuarioDb = [];
    
            usuarios.find( usuario =>{
                if(usuario.email === data.email){
                    usuarioDb = usuario;
                    usuarioExiste = true;
                    //return true
                }
            })
            
            if (data.senha === usuarioDb.senha){
                usuarioDb.isLogged = true;
                // await editUser(usuarioEntrando,usuarioEditado.id)//TODO
                localStorage.setItem('isLogged', true)
                localStorage.setItem('idUserLogged', usuarioDb.id)
                localStorage.setItem('userName', usuarioDb.nome)
                // window.location.href = "/"
                navigate("/")
                return           
            }
            if (!usuarioExiste){
                alert('Usuario não Cadastrado')
                return
            }
            else{
                alert('Usuario ou senha incorretas.')
            }
        } catch(error){
            console.error("Error logging in:", error);
            alert('Erro ao realizar o Login.')
        }
    }

    return (
        <div className={style.divContainer}>
            {/* <h1>Bem-Vindo</h1> */}
            <form className={style.divForm} onSubmit={handleSubmit(onSubmitLogin1)}>
                <h1>Entrar</h1>
                <div className={style.divTextField}>
                    <label htmlFor="email" className={style.labelTextField}>Email</label >
                    <TextField
                        id='email'
                        type='email'
                        sx={{ mt: 1 }}
                        variant='outlined'
                        placeholder='usario@email.com'
                        {...register('email',
                            {
                                required: 'Campo Obrigatorio'
                            }
                        )
                        }
                    />
                    {errors.email && <p className={style.errorMessage}>{errors.email.message}</p>}
                </div>
                <div className={style.divTextField}>
                    <label htmlFor="senha" className={style.labelTextField}>Senha</label>
                    <TextField
                        id='senha'
                        type='password'
                        sx={{ mt: 1 }}
                        variant='outlined'
                        placeholder='Senha'
                        {...register('senha',
                            {
                                required: 'Campo Obrigatorio',
                                minLength: {
                                    value: 6,
                                    message: 'Minimo 6 carateres.'
                                },
                                maxLength: {
                                    value: 12,
                                    message: 'Maximo 12 carateres.'
                                }
                            }
                        )
                        }
                    />
                    {errors.senha && <p className={style.errorMessage}>{errors.senha.message}</p>}
                </div>
                <Button
                    type='submit'
                    variant='contained'
                    sx={{ fontWeight: 'bold', mt: 1.5 }}
                >Entrar
                </Button>

                <div className={style.divider}>
                    <span className={style.dividerText}> ou </span>
                </div>
                {/* Register Button */}
                <Button
                    variant='outlined'
                    sx={{ fontWeight: 'bold', mt: 1 }}
                    onClick={() => navigate("/cadastro")}
                    // onClick={() => window.location.href = "/cadastro"}
                >Cadastrese
                </Button>
            </form>
        </div>
    )
}

