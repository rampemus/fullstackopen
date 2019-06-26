import React, { useState } from 'react'

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
            <div>
                filter shown with: <input
                    value={filterName}
                    onChange={handleFilterNameChange}
                />
            </div>
            <h2>add new</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input
                        value={newName}
                        onChange={handleNewNameChange}
                    />
                </div>
                <div>
                    phone number: <input
                    value={newNumber}
                    onChange={handleNewNumberChange}
                />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase())).map((person, id) => <div key={id}>
                {person.name} {person.number}
            </div>)}
        </div>
    )

}

export default App
