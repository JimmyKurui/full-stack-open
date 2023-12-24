import { useState } from 'react'
import Filter from './components/Filter'
import Contact from './components/Contact'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState()
  const [filter, setFilter] = useState('')
  
  const personsToShow = persons.filter(x => x.name.toLowerCase().
          includes(filter.toLowerCase()))


  const handleNewName = (e) => setNewName(e.target.value)
  const handleNewNumber = (e) => setNewNumber(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(persons.map(x => x.name).some(x => x === newName)) {
      alert(`${newName} is already in phonebook`)
      return;
    }
    setPersons(persons.concat({name: newName, number: newNumber, id: persons.length++}))
    setNewName('')
  }

  const handleFilter = (e) => setFilter(e.target.value)
    

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChange={handleFilter} text={filter} />
      <PersonForm handleSubmit={handleSubmit} handleNewContact={{handleNewName, handleNewNumber}} newContact={{newName, newNumber}} />
      <h2>Numbers</h2>
      {personsToShow.map(x => <Contact key={x.id} name={x.name} tel={x.number}/>) }
    </div>
  )
}


export default App