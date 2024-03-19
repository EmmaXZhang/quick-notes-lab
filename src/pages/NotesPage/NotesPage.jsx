/* eslint-disable react/prop-types */
import { useState } from "react";

export default function NotesPage() {
  const [newNote, setNewNote] = useState("");
  const [noteList, setNoteList] = useState([]);

  // function addToNoteList(noteToAdd) {
  //   setNoteList([...noteList, noteToAdd]);
  // }

  function handleAddNote(event) {
    event.preventDefault();
    setNoteList([...noteList, newNote]);
    setNewNote("");
  }

  return (
    <>
      <h1>Quck Notes</h1>
      <form onSubmit={handleAddNote}>
        <textarea
          value={newNote}
          onChange={(event) => setNewNote(event.target.value)}
        ></textarea>
        <button type="submit">Add Note</button>
      </form>

      <hr />
      {noteList.length === 0 ? (
        <p>No Notes Yet !</p>
      ) : (
        <ul>
          {noteList.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      )}
    </>
  );
}
