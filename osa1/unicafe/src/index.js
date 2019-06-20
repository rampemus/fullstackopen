import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const StatisticsTable = (props) => {

    const good = props.good
    const neutral = props.neutral
    const bad = props.bad

    const total = good + neutral + bad
    const average = (total === 0 ? '0' : ( good - bad ) / total)
    const positiveProsentage = (total === 0 ? '0' : good / total * 100 )  + ' %'

    if ( total === 0) {
        return(
            <div>
                <p>no feedback given</p>
            </div>
        )
    } else {
        return(
            <div>
                <table>
                    <tbody>
                        <StatisticsRow text='good' value={good} />
                        <StatisticsRow text='neutral' value={neutral} />
                        <StatisticsRow text='bad' value={bad} />
                        <StatisticsRow text='total' value={total} />
                        <StatisticsRow text='average' value={average} />
                        <StatisticsRow text='positive' value={positiveProsentage} />
                    </tbody>
                </table>
            </div>
        )
    }

}

const StatisticsRow = (props) => {
    return(
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
    )
}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1)
    }
    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
    }
    const handleBadClick = () => {
        setBad(bad + 1)
    }



    return (
        <div>
            <h1>give feedback</h1>
            <button className='good' onClick={handleGoodClick}>good</button>
            <button className='neutral' onClick={handleNeutralClick}>neutral</button>
            <button className='bad' onClick={handleBadClick}>bad</button>
            <h1>statistics</h1>
            <StatisticsTable good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
