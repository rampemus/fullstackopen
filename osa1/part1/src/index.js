import React from 'react'
import ReactDOM from 'react-dom'
// import Header from './header.jsx'
// import Content from './content.jsx'
// import Total from './total.jsx'


const Hello = (props) => {

    const {name, age} = props

    const bornYear = () => {
        const yearNow = new Date().getFullYear()
        return yearNow - age
    }

    return (
        <div>
            <p>
                Hello {name}, you are {age} years old
            </p>
            <p>So you were probably born {bornYear()}</p>
        </div>
    )
}

const App = () => {
    const nimi = 'Pekka'
    const ika = 10

    return (
        <div>
            <h1>Greetings</h1>
            <Hello name="Arto" age={26 + 10} />
            <Hello name={nimi} age={ika} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
