const PersonForm = ({handleSubmit, handleNewContact, newContact}) => 
    <form onSubmit={handleSubmit}> 
        <div>
          name: <input required value={newContact.newName} onChange={handleNewContact.handleNewName} />
          tel: <input required type="tel" value={newContact.newNumber} onChange={handleNewContact.handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>

// const PersonForm = (props) => console.log(props)

export default PersonForm