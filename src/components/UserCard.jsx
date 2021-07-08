import React from 'react'
import { Button } from './Commons'
import { parseTime } from './Timer'

const UserCard = ({data, deleteParticipant}) => {
    return (
        <div className="card">
            <p>ID: {data.id}</p>
            <p>Name: {data.name} {data.surname}</p>
            <p>Time: {parseTime(data.time)}</p>
            <Button text="Delete" onClick={() => deleteParticipant(data.id)}/>
        </div>
    )
}

export default UserCard;