import React from 'react'

const Persons = ({persons,filterName,handlePersonDelete}) => {
    return (
        <div>
            {persons.filter(
                person => person.name.toLowerCase().includes(filterName.toLowerCase())).map(
                    (person, id) =>
                        <div key={id}>{person.name} {person.number} <button onClick={()=>handlePersonDelete(person)}>delete</button></div>
                )
            }
        </div>
    )
}

export default Persons
