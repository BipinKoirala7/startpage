import { apiResponseT, noteT, patchMethod } from "../types";

export async function getNoteByUserId(user_id: string) {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}/notes/${user_id}`
  );
  if (!response.ok) throw new Error(response.statusText);
  const data: apiResponseT<noteT[]> = await response.json();
  return data;
}

export async function createNote(note: noteT) {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}/notes/create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    }
  );
  if (!response.ok) throw new Error(response.statusText);
  const data: apiResponseT<noteT[]> = await response.json();
  return data;
}

export async function updateNote(patchInfo: patchMethod,note: noteT) {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}/notes/${note.user_id}/${
      note.note_id
    }`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patchInfo),
    }
  );
  if (!response.ok) throw new Error(response.statusText);
  const data: apiResponseT<noteT[]> = await response.json();
  return data;
}

export async function deleteNote(note: noteT) {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}/notes/${note.user_id}/${
      note.note_id
    }`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) throw new Error(response.statusText);
  const data: apiResponseT<noteT[]> = await response.json();
  return data;
}

export function getFilteredNotes(notes: noteT[], search: string) {
  return notes.filter((note) => {
    return note.note_title.toLowerCase().includes(search.toLowerCase());
  });
}