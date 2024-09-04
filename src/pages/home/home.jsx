import { useForm, FormProvider } from 'react-hook-form'
import style from './home.module.css'
import { Timer } from "../../components/timer/timer.jsx";
import { Button } from '@mui/material';
import { NewCycle } from '../../components/newCycle/cycle.jsx';
import { useState } from 'react';

export function Home() {

    const methods = useForm();
    const { handleSubmit } = methods;
    const [cycles, setCycles] = useState([])
    const [activeCycleId, setActiveCycleId] = useState(null)

    /** 
     * @param {Object} data Dados para criação de um novo ciclo
     * @param {number} data.minutesAmount 
     * @param {number} data.secondsAmount 
    */

    function createNewCycle({minutesAmount,secondsAmount}) {
        // id : string
        // minutesAmount: number
        // secondssAmount: number
        // startDate: Date
        // interruptedDate?: Date | undefined

        const id = String(new Date())

        const newCycle = {
            id,
            minutesAmount,
            secondsAmount,
            startDate: new Date()
        }

        setCycles((prevCycles) => [...prevCycles, newCycle])
        setActiveCycleId(id)
        console.log(newCycle)
    }

    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

    return (
        <div className={style.container}>
            <p>Bem-vindo <span className={style.name}>{localStorage.getItem('userName')}</span>!</p>
            <form className={style.formTemporizador} onSubmit={handleSubmit(createNewCycle)}>
                <h1>Temporizador</h1>
                <h2>Estableca o tempo do Timer:</h2>

                <FormProvider {...methods}>
                    <NewCycle/>
                </FormProvider>

                <Timer activeCycle={activeCycle}/>

                <Button
                    type='submit'
                    variant='contained'
                    sx={{ fontWeight: 'bold', mt: 1 }}
                >Começar</Button>
            </form>
        </div>
    )
}
