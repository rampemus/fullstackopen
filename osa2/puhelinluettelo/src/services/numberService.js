import axios from 'axios'
const url = 'http://localhost:3001/api/persons' //for build '/api/persons'

const getAll = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const create = newPerson => {
    const request = axios.post(url, newPerson)
    return request.then( response => response.data)
}

const modifyNumber = (id,newNumber) => {
    const requestUrl = url+`/${id}`
    const request = axios.patch(requestUrl, { number: newNumber})
    return request.then( response => response.data )
}

const deletePerson = person => {
    console.log(person)
    const requestUrl = url+`/${person.id}`
    console.log(requestUrl)
    const request = axios.delete(requestUrl)
    console.log('Person deleted')
    return request.then(response => response.data)
}

export default {
    getAll,
    create,
    modifyNumber,
    deletePerson
}
