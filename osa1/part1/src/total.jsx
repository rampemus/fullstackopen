
import React from 'react'

const Total = (props) => {
    let sum = 0
    for ( let i = 0; i < props.parts.length; i++) {
        sum += props.parts[i].exercises
    }
    return (
            <div>Total of exercises is {sum}</div>
    )
}

export default Total
