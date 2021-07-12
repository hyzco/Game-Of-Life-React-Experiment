import React from 'react'
import './Cell.css'

const Cell = (props) => {
    const { key, color } = props
    
    return (
        <div className={`cell ${color}`} />
    )
}

export default Cell