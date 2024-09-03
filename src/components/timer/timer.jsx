import { useEffect, useState } from 'react'
import style from './timer.module.css'
import PropTypes from 'prop-types'
import { differenceInSeconds } from 'date-fns'

export function Timer({activeCycle}){

    const [amountSecondsPassed, setAmountSecondsPassed] = useState( () =>{
        if(activeCycle){
            return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
        }
        return 0
    })

    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 + activeCycle.secondsAmount : 0

    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

    const minutesDisplay = String(Math.floor(currentSeconds/60)).padStart(2,'0')
    const secondsDiplay = String(Math.floor(currentSeconds % 60)).padStart(2,'0')

    useEffect(() => {
        let intervalId;

        if(activeCycle){
            intervalId = setInterval(() => {
                const secondsDifference = differenceInSeconds(new Date(), new Date(activeCycle.startDate))
                if(secondsDifference>=totalSeconds){
                    setAmountSecondsPassed(totalSeconds)
                    clearInterval(intervalId)
                } else {
                    setAmountSecondsPassed(secondsDifference)
                }
            }, 1000)
        }

        return () =>{
            clearInterval(intervalId)
        }
    },[activeCycle, totalSeconds])
    
    return(
        <div className={style.divTemporizador}>
                <span>{minutesDisplay[0]}</span>
                <span>{minutesDisplay[1]}</span>
                <div>:</div>
                <span>{secondsDiplay[0]}</span>
                <span>{secondsDiplay[1]}</span>
        </div>
    )
}

Timer.propType ={
    activeCycle: PropTypes.object
}