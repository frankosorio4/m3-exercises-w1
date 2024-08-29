import { useForm } from 'react-hook-form'
import { TextField, Button } from "@mui/material"
import style from './cadastro.module.css'

export function Cadastro() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    function onSubmitCadastro(data) {
        console.log(data)
        alert("Usuario cadastrado con sucesso.")
        window.location.href = "/login"
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
                        <label htmlFor="dataNascimento" className={style.labelTextField}>Data de <br /> nascimento: </label >
                        <TextField
                            id='dataNascimento'
                            type='date'
                            sx={{ mt: 1, width: '200px'}}
                            size='small'
                            variant='outlined'
                            placeholder='Data de nascimenmto'
                            {...register('dataNascimento',
                                {
                                    required: 'Campo Obrigatorio'
                                }
                            )
                            }
                        />
                    </div>
                        {errors.dataNascimento && <p className={style.errorMessage}>{errors.dataNascimento.message}</p>}
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
                {/* Register Button */}
                <Button
                    variant='outlined'
                    sx={{ fontWeight: 'bold', mt: 1 }}
                    onClick={() => window.location.href = "/login"}
                >Entrar
                </Button>

            </form>
        </div>
    )
}

