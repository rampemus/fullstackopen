import React from 'react'

const Notification = ({ text, isError }) => {
    if ( text !== null) {
        return (
            <p style={{
                color: isError ? 'red' : 'green',
                fontWeight: 'bold',
                backgroundColor:'lightgrey',
                padding:'10px',
                borderStyle: 'solid',
                borderColor: isError ? 'red' : 'green',
                borderRadius: '5px'
            }}>{text}</p>
        )} else {
            return(<div></div>)
        }
}

export default Notification
