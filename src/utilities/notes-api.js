import sendRequest from "./send-request";

const BASE_URL = "/api/notes";

export function createNote(noteData) {
  return sendRequest(BASE_URL, "POST", {
    text: noteData,
  });
}

export function getNote() {
  return sendRequest(BASE_URL, "GET");
}

export function deleteNote(id) {
  return sendRequest(`${BASE_URL}/${id}`, "DELETE");
}
