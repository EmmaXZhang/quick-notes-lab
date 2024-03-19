import * as notesAPI from "./notes-api";

export async function createNote(noteData) {
  //server send back note based on noteData
  const note = await notesAPI.addNote(noteData);

  return note;
}
