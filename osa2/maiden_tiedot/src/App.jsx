import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './countries'

function App() {

    const [ countries, setCountries ] = useState([])
    const [ search, setSearch ] = useState('')

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data)
            })
    },[])

    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div>
            <input onChange={handleSearchChange} value={search}></input>
            <Countries
                countries={countries}
                filterWord={search}
                handleNameChange={setSearch}
            />
        </div>

    )
}

export default App
