import * as notesAPI from "./notes-api";

export async function createNote(noteData) {
  //server send back note object based on noteData
  const note = await notesAPI.addNote(noteData);
  // note object
  return note;
}

export async function getNote() {
  const allNotes = await notesAPI.getNote();
  return allNotes;
}

export async function deleteNote(id) {
  await notesAPI.deleteNote(id);
}
