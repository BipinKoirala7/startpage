import { create } from "zustand";
import { noteT } from "../types";

type state = {
  notes: noteT[];
  selectedNote: noteT | null;
};

type action = {
  addNote: (note: noteT) => void;
  updateNote: (note: noteT) => void;
  deleteNote: (note: noteT) => void;
  setSelectedNote: (note: noteT | null) => void;
  loadNotes: (notes: noteT[]) => void;
};

const useNoteStore = create<state & action>()((set) => ({
  notes: [
    {
      user_id: "1",
      note_id: "13",
      note_title: "Grocieries that my mom told me to take",
      note_content: "I should be able to finish this project in this month",
      created_At: "2023-03-01T00:00:00.000Z",
      updated_At: "2023-03-01T00:00:00.000Z",
    },
    {
      user_id: "1",
      note_id: "23",
      note_title:
        "Assignments that I have to submit by the tomorrow's deadline",
      note_content: "Homework is a terribel thing to do",
      created_At: "2023-03-02T00:00:00.000Z",
      updated_At: "2023-03-02T00:00:00.000Z",
    },
  ],
  selectedNote: null,
  addNote: (note: noteT) => set((state) => ({ notes: [...state.notes, note] })),
  updateNote: (note: noteT) =>
    set((state) => ({
      notes: state.notes.map((item) =>
        item.note_id === note.note_id ? note : item
      ),
    })),
  loadNotes:(notes:noteT[]) => set(() => ({notes})),
  deleteNote: (note: noteT) =>
    set((state) => ({
      notes: state.notes.filter((item) => item.note_id !== note.note_id),
    })),
  setSelectedNote: (note: noteT | null) => set(() => ({ selectedNote: note })),
}));

export default useNoteStore;
