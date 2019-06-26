import React from 'react'

const Persons = (props) => {
    return (
        <div>
            {props.persons.filter(
                person => person.name.toLowerCase().includes(props.filterName.toLowerCase())).map(
                    (person, id) => <div key={id}>{person.name} {person.number}</div>
                )
            }
        </div>
    )
}

export default Persons
