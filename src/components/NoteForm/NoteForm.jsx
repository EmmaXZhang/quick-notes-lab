/* eslint-disable react/prop-types */
export default function NoteForm({ handleAddNote, note, setNote }) {
  return (
    <form onSubmit={handleAddNote}>
      <textarea
        value={note}
        onChange={(event) => setNote(event.target.value)}
      ></textarea>
      <button type="submit">Add Note</button>
    </form>
  );
}
