/* eslint-disable react/prop-types */
export function NoteList({ noteList }) {
  return (
    <ul>
      {noteList.map((note, index) => (
        <li key={index}>{note}</li>
      ))}
    </ul>
  );
}
