import { useForm } from 'react-hook-form'
import { TextField, Button } from "@mui/material"
import style from './login.module.css'

export function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm()


    function onSubmitLogin1(data) {
        console.log(data)
        //save in LS VALIDATION
        window.location.href = "/home"
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
                    onClick={() => window.location.href = "/cadastro"}
                >Cadastrese
                </Button>
            </form>
        </div>
    )
}

