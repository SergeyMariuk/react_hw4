import React from 'react';
import { Input } from '../components/Commons';
import UserCard from '../components/UserCard';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';

const Users = ({participants, deleteParticipant}) => {
    const [users, setUsers] = useState([...participants])
    const [search, setSearch] = useState('')
    useEffect(() => {
        const filteredUsers = participants.filter(p => {
            return p.name.toLowerCase().includes(search.toLocaleLowerCase()) || p.surname.toLowerCase().includes(search.toLocaleLowerCase()) || String(p.id).includes(search)
        })
        setUsers(filteredUsers)
    }, [participants, search])

    const handleSearch = e => {
        const {value} = e.target;
        setSearch(value)
    }

    return (
        <div className="users">
            <Input type="text" placeholder="Enter name" onChange={handleSearch} value={search}/>
            <hr />
            <div className="cards">
                {users.map(user => {return <UserCard data={user} key={user.id} deleteParticipant={deleteParticipant}/>})}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        participants: state.participants
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteParticipant: id => dispatch({type: 'REMOVE_PART', payload: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);