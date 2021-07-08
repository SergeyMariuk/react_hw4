import React from 'react'

export const Button = (data) => {
    return (
        <button type={data.type} onClick={data.onClick} disabled={data.disabled}>{data.text}</button>
    )
}

export const Input = (data) => {
    return (
        <input type={data.type} name={data.name} placeholder={data.placeholder} onChange={data.onChange}/>
    )
}