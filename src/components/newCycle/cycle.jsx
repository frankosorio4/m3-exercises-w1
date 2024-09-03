import { useFormContext } from "react-hook-form";
import style from "./cycle.module.css";

export function NewCycle() {

    const { register, formState } = useFormContext();

    return (
        <div className={style.container}>
            <div>
                <label htmlFor="minutesAmount">Minutos: </label>
                <input
                    type='number'
                    id='minutesAmount'
                    placeholder="Min"
                    width={'30 px'}
                    {...register('minutesAmount',
                        {
                            required: "Este campo é Obrigatorio.",
                            valueAsNumber: true,
                            min: {
                                value: 0,
                                message: "Valor min: 0 min"
                            },
                            max: {
                                value: 59,
                                message: "Valor max: 59 min"
                            }
                        }
                    )}
                />
                {formState.errors.minutesAmount && (
                    <p className={style.textError}>
                        {formState.errors.minutesAmount.message}
                    </p>)}
            </div>
            <div>
                <label htmlFor="secondsAmount">Segundos: </label>
                <input
                    type='number'
                    id='secondsAmount'
                    placeholder="Min"
                    width={'30 px'}
                    {...register('secondsAmount',
                        {
                            required: "Este campo é Obrigatorio.",
                            valueAsNumber: true,
                            min: {
                                value: 1,
                                message: "Valor min: 1 sec"
                            },
                            max: {
                                value: 59,
                                message: "Valor max: 59 sec"
                            }
                        }
                    )}
                />
                {formState.errors.secondsAmount && (
                    <p className={style.textError}>
                        {formState.errors.secondsAmount.message}
                    </p>)}
            </div>
        </div>
    )
}