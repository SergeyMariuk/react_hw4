import React from 'react'
import { useState } from 'react';
import { Button } from '../components/Commons';

export const parseTime = secs => {
    const ss = secs % 60;
    const mm = (secs - ss) / 60;

    return `${mm > 9 ? mm : '0' + mm} : ${ss > 9 ? ss : '0' + ss}`

}

const Timer = ({data, setData, setIsReg, addUser}) => {
const [time, setTime] = useState(0);
const [timerId, setTimerId] = useState(null)
const [isDisabledStart, setIsDisabledStart] = useState(false)
const [isDisabledStop, setIsDisabledStop] = useState(true)
const [isDisabledReset, setIsDisabledReset] = useState(true)
const [isDisabledSave, setIsDisabledSave] = useState(true)

const handleStart = () => {
    setIsDisabledStart(true)
    setIsDisabledReset(true)
    setIsDisabledSave(true)
    setIsDisabledStop(false)
    const id = setInterval(() => {
        setTime(time => time + 1)
    }, 1000)
    setTimerId(id)
}

const handleStop = () => {
    setIsDisabledStop(true)
    setIsDisabledReset(false)
    clearInterval(timerId)
    time > 0 ? setIsDisabledSave(false) : setIsDisabledSave(true)
}

const handleReset = () => {
    setTime(0)
    setIsDisabledStart(false)
    setIsDisabledReset(true)
    setIsDisabledSave(true)
    setIsDisabledStop(true)
}

const handleCancel = () => {
    handleStop()
    setIsReg(true)
    setData({
        name: '',
        surname: '',
        time: '',
        id: null
    })
}

const handleSave = () => {
    handleStop()
    setIsReg(true)
    addUser({
            ...data,
            time,
        })
    setData(() => {
        return {
            name: '',
            surname: '',
            time: 0,
            id: null,
        }
    })
}

    return (
        <div className="timer">
            <h3>Participant</h3>
            <p>ID: {data.id}</p>
            <p>Participant: {data.name} {data.surname}</p>
            <h2>{parseTime(time)}</h2>
            <Button text="Start" onClick={handleStart} disabled={isDisabledStart}/>
            <Button text="Stop" onClick={handleStop} disabled={isDisabledStop}/>
            <Button text="Reset" onClick={handleReset} disabled={isDisabledReset}/>
            <div className="btn-wrapper">
                <Button text="Cancel" onClick={handleCancel}/>
                <Button text="Save" onClick={handleSave} disabled={isDisabledSave}/>
            </div>
        </div>
    )
}

export default Timer;