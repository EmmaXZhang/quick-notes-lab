/* eslint-disable react/prop-types */
export function NoteList({ noteList }) {
  return (
    <div>
      {noteList.length === 0 ? (
        <p>No Notes Yet!</p>
      ) : (
        <ul>
          {noteList.map((note, index) => (
            <li key={index}>
              <p>{note.text}</p>
              <p>{note.createdAt}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
