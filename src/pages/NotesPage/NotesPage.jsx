/* eslint-disable react/prop-types */
import { useState } from "react";
import { createNote } from "../../utilities/notes-servie";
import NoteForm from "../../components/NoteForm/NoteForm";
import { NoteList } from "../../components/NoteForm/NoteList";

export default function NotesPage() {
  const [newNote, setNewNote] = useState("");
  const [noteList, setNoteList] = useState([]);

  async function handleAddNote(event) {
    event.preventDefault();
    try {
      // send newNote to backend to add
      const note = await createNote(newNote);
      setNoteList([...noteList, note.text]);
      setNewNote("");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>Quck Notes</h1>
      <NoteForm
        handleAddNote={handleAddNote}
        newNote={newNote}
        setNewNote={setNewNote}
      />
      <hr />
      <NoteList noteList={noteList} />
    </>
  );
}
