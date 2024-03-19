/* eslint-disable react/prop-types */
import { useState } from "react";

export function NoteList({ noteList, handleDelete }) {
  const [reverse, setReverse] = useState(false);

  if (noteList.length === 0) {
    <p>No Notes Yet!</p>;
  }

  const list = noteList.map((note) => (
    <li key={note._id}>
      <p>
        {note.text}
        <button onClick={() => handleDelete(note._id)}>x</button>
      </p>
      <p>{new Date(note.createdAt).toLocaleString()}</p>
    </li>
  ));

  return (
    <div>
      <button
        onClick={() => {
          setReverse(!reverse);
        }}
      >
        Display descending order
      </button>
      {reverse ? list.reverse() : list}
    </div>
  );
}
