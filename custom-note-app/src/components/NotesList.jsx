// src/components/NotesList.jsx
import React from 'react';

const NotesList = () => {
  const notes = JSON.parse(localStorage.getItem('custom_notes')) || [];

  return (
    <div className="space-y-4">
      {notes.length === 0 ? (
        <p className="text-center text-gray-500">No notes yet. Add some!</p>
      ) : (
        notes.map((note) => (
          <div key={note.id} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
            <p>{note.text}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default NotesList;
