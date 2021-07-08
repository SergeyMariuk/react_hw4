import React from 'react'
import { useState } from 'react'
import Registration from '../components/Registration'
import Timer from '../components/Timer'
import { connect } from 'react-redux';

const NewParticipantContainer = ({addUser}) => {
    const [isReg, setIsReg] = useState(true)
    const [data, setData] = useState({
        name: '',
        surname: '',
        time: '',
        id: null,
    })

    return (
        <div className="participant">
            {isReg?
                <Registration
                    setData={setData}
                    setIsReg={setIsReg}
                    data={data}
                />:
                <Timer
                    data={data}
                    setData={setData}
                    setIsReg={setIsReg}
                    addUser={addUser}
                />
            }
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addUser: (data) => dispatch({type: 'ADD_PART', payload:data})
    }
}

export default connect(null, mapDispatchToProps)(NewParticipantContainer);