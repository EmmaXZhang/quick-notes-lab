/* eslint-disable react/prop-types */
import { useState } from "react";
import { createNote } from "../../utilities/notes-servie";
import NoteForm from "../../components/NoteForm/NoteForm";

export default function NotesPage() {
  const [note, setNote] = useState([]);

  async function handleAddNote(event) {
    event.preventDefault();
    try {
      // send newNote to backend to add to database ?????? need to change format ?
      const newNote = await createNote(newNote);
      setNote([...note, newNote]);
      setNote([]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>Quck Notes</h1>
      <NoteForm handleAddNote={handleAddNote} note={note} setNote={setNote} />

      <hr />
      {note.length === 0 ? (
        <p>No Notes Yet !</p>
      ) : (
        <ul>
          {note.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      )}
    </>
  );
}
