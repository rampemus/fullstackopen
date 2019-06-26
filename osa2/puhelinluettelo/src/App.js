import React, { useState } from 'react'

const App = () => {
    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas' }
    ])
    const [ newName, setNewName ] = useState('')

    const nameTaken = (name) => {
        return persons.find(person=>person.name === name)
    }

    const addPerson = (event) => {
        event.preventDefault()
        const newPerson = {
            name: newName,
        }
        if (nameTaken(newName)) {
            window.alert(`${newName} is already added to phonebook`)
        } else {
            setPersons(persons.concat(newPerson))
            setNewName('')
        }
    }

    const handleValueChange = (event) => {
        // console.log(event.target.value)
        setNewName(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input
                        value={newName}
                        onChange={handleValueChange}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map((person, id) => <div key={id}>{person.name}</div>)}
        </div>
    )

}

export default App
