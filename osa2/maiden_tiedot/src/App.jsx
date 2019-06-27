import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './weather'
import './app.css'

const Countries = (props) => {

    let filteredCountries = props.countries.filter(country => {
        return (country.name + ' ').toLowerCase().includes(props.filterWord.toLowerCase())
        //                      ^
        //for separating Niger from Nigeria user can add a space in the end
    })

    if (filteredCountries.length === 1 ) {
        const country = filteredCountries[0]
        return <div>
            <h3>{country.name}</h3>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <p>languages {country.languages.map((language,id) => <li key={id}>{language.name}</li>)}</p>
            <p><object id='flag' data={country.flag} type="image/svg+xml" aria-label='flag picture'></object></p>
            <Weather location={country.name}/>
        </div>
    }
    if ( filteredCountries.length < 10 ){
        return <div>
            {filteredCountries.map((country,id) => {
                console.log()
                return <p key={id}>
                    {country.name} <button onClick={() => props.handleNameChange(country.name)}>show</button>
                </p>
            })}
        </div>
    }
    return <p>Too many matches, specify another filter</p>
}

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
            <Countries countries={countries} filterWord={search}
                handleNameChange={setSearch}/>
        </div>

    )
}

export default App
