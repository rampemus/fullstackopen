import React, { useState, useEffect } from 'react'
import numberService from './services/numberService'
import Filter from './components/filter'
import PersonForm from './components/personform'
import Persons from './components/persons'
import Notification from './components/notification'

const App = () => {


    const [ persons, setPersons ] = useState([])
    const [notification, setNotification] = useState({
        text: 'Notification will be printed here',
        error: false
    })
    const [ filterName, setFilterName ] = useState('')
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')

    useEffect(()=>{
        // console.log('notification text:',notification.text)
        if ( notification.text ) { //only set timeout if there is actually notification
            // console.log('timeout added')
            setTimeout(
                ()=>{
                    // console.log('setting notification to null')
                    setNotification({text:null, error:false})
                }
            ,5000)
        }
    },[notification])

    useEffect(()=>{
        numberService
            .getAll()
            .then(initialNumbers => {
                setPersons(initialNumbers)
            })
    },[])

    const handlePersonDelete = person => {
        if (window.confirm(`Delete ${person.name} from phonebook?`))
        numberService
            .deletePerson(person)
            .then(
                setPersons(persons.filter(number => number.id !== person.id))
            )
    }

    const nameTaken = (name) => {
        return persons.find(person=>person.name === name)
    }

    const addPerson = (event) => {
        event.preventDefault()
        const newPerson = {
            name: newName,
            number: newNumber,
        }
        if ( nameTaken(newName) !== undefined ) {
            if( window.confirm(`${newName} is already added to phonebook, would you like to replace the old number with ${newNumber}?`) ) {
                numberService
                    .modifyNumber(nameTaken(newName).id,newNumber)
                    .then( modifiedPerson => {
                        setPersons(
                            persons.map(person => person.id !== modifiedPerson.id ? person : modifiedPerson)
                        )
                    })
                    .catch(error => {
                        setNotification({text:`Information of ${newPerson.name} was already been removed from server`, error:true})
                    })
            }
        } else {
            numberService
                .create(newPerson)
                .then(returnedPerson => {
                    console.log(returnedPerson)
                    setPersons(persons.concat(returnedPerson))
                })
                .then(()=>{setNotification({text:`${newPerson.name} added to the phone book`, error:false})})
                .catch(error => {setNotification({text:`${error.message}`, error:true})})

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
            <Notification text={notification.text} isError={notification.error}/>
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
                handlePersonDelete={handlePersonDelete}
            />
        </div>
    )

}

export default App
