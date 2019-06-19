import React, { useState } from 'react'
import ReactDOM from 'react-dom'
// import Header from './header.jsx'
// import Content from './content.jsx'
// import Total from './total.jsx'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const App = (props) => {

    const[clicks, setClicks] = useState({
        left: 0, right: 0
    })
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        const newClicks = {
            ...clicks,
            left: clicks.left + 1,
        }
        setClicks(newClicks)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        console.log('R')
        const newClicks = {
            ...clicks,
            right: clicks.right + 1,
        }
        setClicks(newClicks)
    }

    return (
        <div>
            <div>
                {clicks.left}
                <Button handleClick={handleLeftClick} text='left' />
                <Button handleClick={handleRightClick} text='right' />
                {clicks.right}
                <History allClicks={allClicks} />
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
