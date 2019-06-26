import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/filter'
import PersonForm from './components/personform'
import Persons from './components/persons'

const App = () => {


    const [ persons, setPersons ] = useState([])

    const [ filterName, setFilterName ] = useState('')
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')

    useEffect(()=>{
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
            })
    },[])

    const nameTaken = (name) => {
        return persons.find(person=>person.name === name)
    }

    const addPerson = (event) => {
        event.preventDefault()
        const newPerson = {
            name: newName,
            number: newNumber,
        }
        if (nameTaken(newName)) {
            window.alert(`${newName} is already added to phonebook`)
        } else {
            setPersons(persons.concat(newPerson))
            setNewName('')
            setNewNumber('')
        }
    }

    const handleFilterNameChange = (event) => {
        // console.log(event.target.value)
        setFilterName(event.target.value)
    }

    const handleNewNameChange = (event) => {
        // console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNewNumberChange = (event) => {
        // console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    return (
        <div>
            <h2>Phone book</h2>
            <Filter
                filterName={filterName}
                handleFilterNameChange={handleFilterNameChange}
            />
            <h2>add new</h2>
            <PersonForm
                addPerson={addPerson}
                newName={newName}
                handleNewNameChange={handleNewNameChange}
                newNumber={newNumber}
                handleNewNumberChange={handleNewNumberChange}
            />
            <h2>Numbers</h2>
            <Persons
                persons={persons}
                filterName={filterName}
            />
        </div>
    )

}

export default App
