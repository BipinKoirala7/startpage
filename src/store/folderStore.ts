import { create } from "zustand";
import { folderT } from "../types";

type state = {
  selectedFolder: folderT | null ;
  folders: Array<folderT>;
};

type action = {
  setSelectedFolder: (id: string) => void;
  addFolder: (folder: folderT) => void;
  removeFolder: (folder: string) => void;
};

const useFolderStore = create<state & action>((set, get) => ({
  selectedFolder: null,
  folders: [
    {
      folder_id: "1",
      folder_name: "ICP",
      folder_description: "Description for ICP",
      folder_icon_url: "",
      folder_background_color: "default",
      created_At:"2023-01-01T17:57:00.000Z",
      updated_At: null,
    },
    {
      folder_id: "2",
      folder_name: "Football",
      folder_description: "Description for Football",
      folder_icon_url: "",
      folder_background_color: "default",
      created_At:"2023-02-01T17:57:00.000Z",
      updated_At: null,
    },
    {
      folder_id: "3",
      folder_name: "Social Media",
      folder_description: "Description for Social Media",
      folder_icon_url: "https://s2.svgbox.net/files.svg?ic=vscode",
      folder_background_color: "default",
      created_At:"2023-03-01T17:57:00.000Z",
      updated_At: null,
    },
    {
      folder_id: "4",
      folder_name: "Programming",
      folder_description: "Description for Programming",
      folder_icon_url: "",
      folder_background_color: "default",
      created_At:"2023-04-01T17:57:00.000Z",
      updated_At: null,
    },
    {
      folder_id: "5",
      folder_name: "Basketball",
      folder_description: "Description for Basketball",
      folder_icon_url: "",
      folder_background_color: "default",
      created_At:"2023-05-01T17:57:00.000Z",
      updated_At: null,
    },
    {
      folder_id: "6",
      folder_name: "Dating",
      folder_description: "Description for Dating",
      folder_icon_url: "",
      folder_background_color: "default",
      created_At:"2023-06-01T17:57:00.000Z",
      updated_At: null,
    },
    {
      folder_id: "7",
      folder_name: "Facebook",
      folder_description: "Description for Facebook",
      folder_icon_url: "",
      folder_background_color: "default",
      created_At:"2023-07-01T17:57:00.000Z",
      updated_At: null,
    },
    {
      folder_id: "8",
      folder_name: "Youtube",
      folder_description: "Description for Youtube",
      folder_icon_url: "",
      folder_background_color: "default",
      created_At:"2023-08-01T17:57:00.000Z",
      updated_At: null,
    },
    {
      folder_id: "9",
      folder_name: "Web Dev",
      folder_description: "Description for Web Dev",
      folder_icon_url: "",
      folder_background_color: "default",
      created_At:"2023-09-01T17:57:00.000Z",
      updated_At: null,
    },
  ],
  setSelectedFolder: (id: string) => {
    const folders = get().folders;
    const folder = folders.find((f) => f.folder_id === id);
    set({ selectedFolder: folder });
  },
  addFolder: (folder: folderT) =>
    set((state) => ({ folders: [...state.folders, folder] })),
  removeFolder: (folder_id: string) =>
    set((state) => ({
      folders: state.folders.filter((f) => f.folder_id !== folder_id),
    })),
}));

export default useFolderStore;