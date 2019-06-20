import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

let anecdoteTable = []

for (let i = 0; i < anecdotes.length; i++) {
    anecdoteTable.push({
        id: i,
        text: anecdotes[i],
        points: 0,
    })
}

const randomInteger = (maxValue) => {
    return Math.floor( Math.random() * maxValue )
}

const App = () => {

    //anecdotes will be loaded in the useEffect
    const [anecdote, setAnecdote] = useState([{
        id: 0,
        text: "anecdotes haven't been loaded yet",
        points: 0,
    }])

    const [selected, setSelected] = useState(randomInteger(anecdote.length))

    useEffect(()=>{
        setAnecdote(anecdoteTable)
    },[])

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdote.find(a => a.id === selected).text}</p>
            <p>Has {anecdote.find(a => a.id === selected).points === 0 ? 'no' : anecdote.find(a => a.id === selected).points } votes</p>
            <p>
                <button onClick={()=>{
                    setAnecdote(()=>{
                        let newAnecdote = anecdote.concat()
                        newAnecdote.find(a => a.id === selected).points += 1
                        newAnecdote.sort((a,b)=>{return b.points - a.points})
                        // console.log(newAnecdote)
                        return newAnecdote
                    })
                }}>vote</button>
                <button onClick={()=>{
                    setSelected(randomInteger(anecdote.length))
                }}>next anecdote</button>
            </p>
            <h1>Anecdote with most votes</h1>
            <p>{anecdote[0].text}</p>
            <p>Has {anecdote[0].points === 0 ? 'no' : anecdote[0].points } votes</p>
        </div>
    )
}



ReactDOM.render(<App anecdotes={anecdoteTable}/>,
    document.getElementById('root')
)
