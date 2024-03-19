/* eslint-disable react/prop-types */
export function NoteList({ noteList }) {
  return (
    <div>
      {noteList.length === 0 ? (
        <p>No Notes Yet!</p>
      ) : (
        <ul>
          {noteList.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
