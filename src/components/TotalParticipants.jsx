import React from 'react'
import { Button } from './Commons';

const TotalParticipants = ({count, handleShowWinner}) => {
    return (
        <div className='winner'>
            <h3>Total Participants: {count}</h3>
            <Button text="Show winner" onClick={handleShowWinner}/>
        </div>
    )
}

export default TotalParticipants;