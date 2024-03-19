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
      // note is an object, property can be found in <notes> controller
      const note = await createNote(newNote);

      setNoteList([...noteList, note]);

      setNewNote("");
    } catch (err) {
      console.log(err);
    }
  }

  //component is being initialized and inserted into the DOM for the first time.
  useEffect(() => {
    (async () => {
      try {
        const notes = await getNote();
        console.log("notes", notes);
        setNoteList(notes);
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
