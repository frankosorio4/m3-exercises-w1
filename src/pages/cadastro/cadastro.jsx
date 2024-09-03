import { useForm } from 'react-hook-form'
import { TextField, Button } from "@mui/material"
import style from './cadastro.module.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { FetchContext } from '../../context/Fetch/Fetch'

export function Cadastro() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const {usuarios, registerUser} = useContext(FetchContext)
    const navigate = useNavigate()

    function onSubmitCadastro(dataUser) {
        try{
            let emailValido = true
            
            if (dataUser.senha !== dataUser.confirmarSenha) {
                alert("As senhas providenciadas nâo coinciden.")
                return;
            }

            usuarios.find(usuario => {
                if(usuario.email === dataUser.email){
                    alert('Email Ja Cadastrado. Tente com outro Email.')
                    emailValido = false
                    return
                }
            })
    
            if (emailValido){
                delete dataUser.confirmarSenha;
                console.log(dataUser)
                registerUser(dataUser)
                alert("Usuario cadastrado con sucesso.")
                navigate("/login")
            }
        }
        catch(error){
            console.error("Error cadastro in:", error);
            alert('Erro ao realizar o Cadastro.')
        }

    }

    return (
        <div className={style.divContainer}>
            <form className={style.divForm} onSubmit={handleSubmit(onSubmitCadastro)}>
                <h1>Cadastro</h1>
                <div className={style.divInputs}>
                    <div className={style.divTextField}>
                        <label htmlFor="nome" className={style.labelTextField}>Nome: </label >
                        <TextField
                            id='nome'
                            type='text'
                            sx={{ mt: 1 }}
                            variant='outlined'
                            placeholder='Nome'
                            size='small'
                            {...register("nome",
                                {
                                    required: "Campo Obrigatorio",
                                    minLength: {
                                        value: 5,
                                        message: "Mínimo 5 caracteres."
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: "Máximo de 30 caracteres"
                                    }
                                }
                            )
                            }
                        />
                    </div>
                        {errors.nome && <p className={style.errorMessage}>{errors.nome.message}</p>}
                    <div className={style.divTextField}>
                        <label htmlFor="dataUserNascimento" className={style.labelTextField}>Data de <br /> nascimento: </label >
                        <TextField
                            id='dataUserNascimento'
                            type='date'
                            sx={{ mt: 1, width: '200px'}}
                            size='small'
                            variant='outlined'
                            placeholder='dataUser de nascimenmto'
                            {...register('dataUserNascimento',
                                {
                                    required: 'Campo Obrigatorio'
                                }
                            )
                            }
                        />
                    </div>
                        {errors.dataUserNascimento && <p className={style.errorMessage}>{errors.dataUserNascimento.message}</p>}
                    <div className={style.divTextField}>
                        <label htmlFor="email" className={style.labelTextField}>Email:</label >
                        <TextField
                            id='email'
                            type='email'
                            sx={{ mt: 1 }}
                            variant='outlined'
                            size='small'
                            placeholder='usario@email.com'
                            {...register('email',
                                {
                                    required: 'Campo Obrigatorio'
                                }
                            )
                            }
                        />
                    </div>
                    {errors.email && <p className={style.errorMessage}>{errors.email.message}</p>}
                    <div className={style.divTextField}>
                        <label htmlFor="senha" className={style.labelTextField}>Senha:</label>
                        <TextField
                            id='senha'
                            type='password'
                            sx={{ mt: 1 }}
                            variant='outlined'
                            size='small'
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
                    </div>
                    {errors.senha && <p className={style.errorMessage}>{errors.senha.message}</p>}
                    <div className={style.divTextField}>
                        <label htmlFor="confirmarSenha" className={style.labelTextField}>Confirmar <br /> Senha:</label>
                        <TextField
                            id='confirmarSenha'
                            type='password'
                            sx={{ mt: 1 }}
                            variant='outlined'
                            size='small'
                            placeholder='Confirmar Senha'
                            {...register('confirmarSenha',
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
                    </div>
                {errors.confirmarSenha && <p className={style.errorMessage}>{errors.confirmarSenha.message}</p>}
                </div>
                <Button
                    type='submit'
                    variant='contained'
                    sx={{ fontWeight: 'bold', mt: 1.5 }}
                >Cadastrar
                </Button>

                <div className={style.divider}>
                    <span className={style.dividerText}> ou </span>
                </div>

                <Button
                    variant='outlined'
                    sx={{ fontWeight: 'bold', mt: 1 }}
                    onClick={() => navigate("/login")}   
                    // onClick={() => window.location.href = "/login"}
                >Entrar
                </Button>

            </form>
        </div>
    )
}

