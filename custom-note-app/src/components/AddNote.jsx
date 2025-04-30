import React, { useState } from 'react';
import '../App.css';

const AddNote = ({ onAddNote }) => {
  const [noteText, setNoteText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteText.trim()) {
      try {
        onAddNote({ text: noteText, id: Date.now() });
        setNoteText(''); // Clear input
        console.log('Text cleared!');
      } catch (err) {
        console.error('Failed to add note:', err);
      }
    }
  };

  return (
    <div className="note-container">
      <h2 className="note-title">Add a New Note</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="note-textarea"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Write your note here..."
          rows="5"
        />
        <button type="submit" className="note-button">
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
