import React, { useState } from 'react'
import Filter from './components/filter'
import PersonForm from './components/personform'
import Persons from './components/persons'

const App = () => {


    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])

    const [ filterName, setFilterName ] = useState('')
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')

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
