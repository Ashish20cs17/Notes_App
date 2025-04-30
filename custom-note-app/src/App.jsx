import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';


const App = () => {
  const [currentView, setCurrentView] = useState('add');
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, { id: Date.now(), text: newNote }]);
      setNewNote('');
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="App">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      
      {currentView === 'add' && (
        <div className="add-note">
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Enter your note here..."
          ></textarea>
          <button onClick={addNote}>Add Note</button>
        </div>
      )}

      {currentView === 'view' && (
        <div className="view-notes">
          {notes.length === 0 ? (
            <p>No notes available.</p>
          ) : (
            <ul>
              {notes.map(note => (
                <li key={note.id}>
                  {note.text}
                  <button className="delete-btn" onClick={() => deleteNote(note.id)}>Delete</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
