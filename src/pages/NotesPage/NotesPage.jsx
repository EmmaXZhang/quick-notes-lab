/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { createNote } from "../../utilities/notes-api";
import NoteForm from "../../components/NoteForm/NoteForm";
import { NoteList } from "../../components/NoteForm/NoteList";
import { getNote } from "../../utilities/notes-api";
import { deleteNote } from "../../utilities/notes-api";

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

  async function handleDelete(noteId) {
    try {
      await deleteNote(noteId);
      //filter out deleted note id
      const updatedNotes = noteList.filter((n) => n._id !== noteId);
      console.log("updatedNotes", updatedNotes);
      setNoteList(updatedNotes);
    } catch (err) {
      console.log(err);
    }
  }

  //only one time when page loaded
  useEffect(() => {
    (async () => {
      try {
        const notes = await getNote();
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
      <NoteList noteList={noteList} handleDelete={handleDelete} />
    </>
  );
}
