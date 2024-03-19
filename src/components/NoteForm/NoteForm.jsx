/* eslint-disable react/prop-types */
export default function NoteForm({ handleAddNote, newNote, setNewNote }) {
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
