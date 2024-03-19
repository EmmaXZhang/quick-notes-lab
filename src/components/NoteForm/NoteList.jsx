/* eslint-disable react/prop-types */
import { useState } from "react";

export function NoteList({ noteList }) {
  const [reverse, setReverse] = useState(false);

  if (noteList.length === 0) {
    <p>No Notes Yet!</p>;
  }

  const list = noteList.map((note, index) => (
    <li key={index}>
      <p>{note.text}</p>
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
        Display descending date
      </button>
      {reverse ? list.reverse() : list}
    </div>
  );
}
