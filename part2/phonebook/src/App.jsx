import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Contact from './components/Contact'
import PersonForm from './components/PersonForm'
import contactService from './services/contacts'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState()
  const [filter, setFilter] = useState('')
  
  useEffect(() => {
    console.log('effect')
    contactService.getAll()
      .then(contacts => setPersons(contacts))
  }, [])

  const personsToShow = persons.filter(x => x.name.toLowerCase().
          includes(filter.toLowerCase()))


  const handleNewName = (e) => setNewName(e.target.value)
  const handleNewNumber = (e) => setNewNumber(e.target.value)
  
  const handleDelete = (id) => () => {
    confirm('Do you want to delete this contact?')
    contactService.deleteOne(id)
    setPersons(persons.filter(x => x.id !== id))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const existingContact = persons.find(x => x.name === newName) //persons.map(x => x.name).some(x => x === newName)
    const newContact = {name: newName, number: newNumber}

    if(existingContact) {
      console.log(existingContact.name)
      const confirmation = confirm(`${newName} is already in phonebook, are you sure you want to replace their number?`)
      if (!confirmation) return; 
      contactService.update(existingContact.id, newContact)
        .then(returnedContact => {
          setPersons(persons.map(x => x.id !== returnedContact.id ? x: returnedContact) )
          setNewName('')
          setNewNumber('')
        })
      return;
    }
    contactService.create(newContact)
      .then(returnedContact => {
        setPersons(persons.concat(returnedContact))
        setNewName('')
      })
  }

  const handleFilter = (e) => setFilter(e.target.value)
    
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChange={handleFilter} text={filter} />
      <PersonForm handleSubmit={handleSubmit} 
        handleNewContact={{handleNewName, handleNewNumber}} 
        newContact={{newName, newNumber}}
      />
      <h2>Numbers</h2>
      {personsToShow.map(x => 
        <Contact key={x.id} 
          name={x.name} tel={x.number} 
          handleDelete={handleDelete(x.id)}
        />
      )}
    </div>
  )
}


export default App