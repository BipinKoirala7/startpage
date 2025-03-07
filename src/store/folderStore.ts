import { create } from "zustand";
import { folderT } from "../types";

type state = {
  selectedFolder: folderT | null ;
  folders: Array<folderT>;
};

type action = {
  setSelectedFolder: (id: string) => void;
  loadFolders:(folders:Array<folderT>) => void;
  addFolder: (folder: folderT) => void;
  removeFolder: (folder: string) => void;
};

const useFolderStore = create<state & action>((set, get) => ({
  selectedFolder: null,
  folders:[],
  setSelectedFolder: (id: string) => {
    const folders = get().folders;
    const folder = folders.find((f) => f.folder_id === id);
    set({ selectedFolder: folder });
  },
  loadFolders: (folders: Array<folderT>) => set({ folders }),
  addFolder: (folder: folderT) =>
    set((state) => ({ folders: [...state.folders, folder] })),
  removeFolder: (folder_id: string) =>
    set((state) => ({
      folders: state.folders.filter((f) => f.folder_id !== folder_id),
    })),
}));

export default useFolderStore;