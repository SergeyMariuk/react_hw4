import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TotalParticipants from '../components/TotalParticipants'
import WinnerInfo from '../components/WinnerInfo'

const Winner = () => {
    const count = useSelector(state => state.participants.length)
    const winner = useSelector(state => state.winner)
    const dispatch = useDispatch()
    const handleShowWinner = () => {
        dispatch({type: 'SHOW_WINNER'})
    }
    return winner ? <WinnerInfo winner={winner}/> : <TotalParticipants count={count} handleShowWinner={handleShowWinner}/>
}

export default Winner;