import React from 'react'
import { useState } from 'react';
import { Button, Input } from '../components/Commons';

const Registration = ({setData, setIsReg}) => {
    const [isDisable, setDisable] = useState(true)
    const [name, setName] = useState(false)
    const [surname, setSurname] = useState(false)

    const handleName = e => {
        e.preventDefault();
        if(e.target.value.length){
            setName(true)
            if (surname){
                setDisable(false)
            }
        }
        else {
            setName(false)
            setDisable(true)
        }
    }

    const handleSurname = e => {
        e.preventDefault();
        if(e.target.value.length){
            setSurname(true)
            if (name){
                setDisable(false)
            }
        }
        else {
            setSurname(false)
            setDisable(true)
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        const {name, surname} = e.target.elements;
        if(name.value.length && surname.value.length){
            setData(state => {
                return{...state,
                name: name.value,
                surname: surname.value,
                id: new Date().getTime(),
            }
            })
            setIsReg(false)
        }
    }

    return (
        <div className="registration">
                <h3>Registration user</h3>
                <form onSubmit={handleSubmit}>
                    <div className="fname">
                        <label>
                            First name:
                            <Input type="text" name="name" placeholder="Enter first name..." onChange={handleName}/>
                        </label>
                    </div>
                    <div className="sname">
                        <label>
                            Second name:
                            <Input type="text" name="surname" placeholder="Enter second name..." onChange={handleSurname}/>
                        </label>
                    </div>
                    <Button disabled={isDisable} text="Register participant" type="submit"/>
                </form>
            </div>
    )
}

export default Registration;