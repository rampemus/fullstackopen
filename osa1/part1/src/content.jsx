
import React from 'react'
import Part from './part.jsx'

const Content = (props) => {
    return (
        <div>
            {props.parts.map(part => {
                return(<p>{part.name} {part.exercises}</p> )
            })}
        </div>
    )
}

export default Content
