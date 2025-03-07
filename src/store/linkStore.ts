import { create } from "zustand";

import { apiResponseT, linkT } from "../types";

type state = {
  links: Array<linkT>;
};

type action = {
  fetchLinks: (folder_id: string) => void;
  loadLinks: (links: Array<linkT>) => void;
  addLink: (link: linkT) => void;
  removeLink: (link_id: string) => void;
};

const useLinkStore = create<state & action>((set) => ({
  links: [],
  fetchLinks: async (folder_id: string)  => {
    console.log(folder_id);
    try {
      const response = await fetch(
        `http://localhost:5000/api/links/${folder_id}`
      );
      const data: apiResponseT<linkT[]> = await response.json();
      console.log(data)
      if (data.data) {
        set({ links: data.data });
      }
    } catch (error) {
      console.error("Error fetching links:", error);
    }
  },
  loadLinks: (links: Array<linkT>) => set({ links }),
  addLink: (link: linkT) => set((state) => ({ links: [...state.links, link] })),
  removeLink: (link_id: string) =>
    set((state) => ({
      links: state.links.filter((l) => l.link_id !== link_id),
    })),
}));

export default useLinkStore;
