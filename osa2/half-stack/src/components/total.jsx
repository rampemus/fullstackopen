import React from 'react'

const Total = ({parts}) => {

    return (
        <p><strong>
            Total is { parts.map(part=>{return part.exercises} ).reduce( (current,next,id,all)=>{return current + next}) }
        </strong></p>
    )
}

export default Total
