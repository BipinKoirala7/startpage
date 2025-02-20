import { create } from "zustand";
import { folderT } from "../types";

type state = {
  selectedFolderId: string;
  folders: Array<folderT>;
};

type action = {
  setSelectedFolderId: (id: string) => void;
  addFolder: (folder: folderT) => void;
  removeFolder: (folder: string) => void;
};

const userMainStore = create<state & action>((set) => ({
  selectedFolderId: "",
  folders: [],
  setSelectedFolderId: (id: string) => set({ selectedFolderId: id }),
  addFolder: (folder:folderT) =>
    set((state) => ({ folders: [...state.folders, folder] })),
  removeFolder: (folder_id:string) =>
    set((state) => ({ folders: state.folders.filter((f) => f.folder_id !== folder_id) })),
}));

export default userMainStore;