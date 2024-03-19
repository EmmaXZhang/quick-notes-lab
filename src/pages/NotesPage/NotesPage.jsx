/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { createNote } from "../../utilities/notes-servie";
import NoteForm from "../../components/NoteForm/NoteForm";
import { NoteList } from "../../components/NoteForm/NoteList";
import { getNote } from "../../utilities/notes-api";

export default function NotesPage() {
  const [newNote, setNewNote] = useState("");
  const [noteList, setNoteList] = useState([]);

  async function handleAddNote(event) {
    event.preventDefault();
    try {
      // send newNote to backend to add, then wait note object to created and send back
      const note = await createNote(newNote);

      setNoteList([
        ...noteList,
        { text: note.text, createdAt: note.createdAt },
      ]);

      setNewNote("");
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const notes = await getNote();
        setNoteList([
          ...noteList,
          { text: notes.text, createdAt: notes.createdAt },
        ]);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

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
