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
  notes: [],
  selectedNote: null,
  addNote: (note: noteT) =>
    set((state) => {
      const updatedNotes = [...state.notes, note];
      return { notes: updatedNotes };
    }),
  updateNote: (note: noteT) =>
    set((state) => ({
      notes: state.notes.map((item) =>
        item.note_id === note.note_id ? {...note} : item
      ),
    })),
  loadNotes: (notes: noteT[]) => set(() => ({ notes })),
  deleteNote: (note: noteT) =>
    set((state) => ({
      notes: state.notes.filter((item) => item.note_id !== note.note_id),
    })),
  setSelectedNote: (note: noteT | null) => set(() => ({ selectedNote: note })),
}));

export default useNoteStore;
