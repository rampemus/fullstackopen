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
                borderRadius: '5px',
                position: 'fixed',
                width:'16em',/*set to a negative number 1/2 of your height*/
                marginLeft: '-8em',
                left: '50%',
                top: '0%',
                zIndex: 1
            }}>{text}</p>
        )} else {
            return(<div></div>)
        }
}

export default Notification
