import React from 'react'
import { parseTime } from './Timer'

const WinnerInfo = ({winner}) => {
    return (
        <div className="winner">
            <h3>The winner</h3>
            <p>ID: {winner.id}</p>
            <p>Name: {winner.name} {winner.surname}</p>
            <p>Time: {parseTime(winner.time)}</p>
        </div>
    )
}

export default WinnerInfo;