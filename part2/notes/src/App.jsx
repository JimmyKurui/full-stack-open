import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('new flame')
  const [showAll, setShowAll] = useState(true)

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      id: ++notes.length,
      content: newNote,
      important: Math.random() < 0.5
    } 
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (e) => {
    setNewNote(e.target.value)
    
  }
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <div>
        <button onClick={() => setShowAll(!showAll)}>show {showAll ? 'important' : 'all'}</button>
      </div>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App