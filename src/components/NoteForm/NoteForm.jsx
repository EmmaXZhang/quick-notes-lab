/* eslint-disable react/prop-types */
import { useState } from "react";

export default function NoteForm({ addNote }) {
  const [newNote, setNewNote] = useState("");

  function handleAddNote(event) {
    event.preventDefault();

    addNote(newNote);

    setNewNote("");
  }

  return (
    <form onSubmit={handleAddNote}>
      <textarea
        value={newNote}
        onChange={(event) => setNewNote(event.target.value)}
      ></textarea>
      <button type="submit">Add Note</button>
    </form>
  );
}
