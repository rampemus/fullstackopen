
import React from 'react'

const Total = (props) => {
    return (
            <p>
              Number of exercises {props.exercises.reduce((a, b) => a + b, 0)}
            </p>
    )
}

export default Total
