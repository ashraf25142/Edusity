import React from 'react'
import "./title.css"

function Title({title,subtitle}) {
    return (
        <div className='title'>
            <p>{title}</p>
            <h1>{subtitle}</h1>
        </div>
    )
}

export default Title
