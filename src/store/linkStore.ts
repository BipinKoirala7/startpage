import { create } from "zustand";

import {  linkT } from "../types";

type state = {
  links: Array<linkT>
};

type action = {
  loadLinks: (links: Array<linkT>) => void,
  addLink: (link: linkT) => void,
  removeLink: (link_id: string) => void
};

const useLinkStore = create<state & action>((set) => ({
  links: [],
  loadLinks: async (links:linkT[])  => set({ links: links }),
  addLink: (link: linkT) => set((state) => ({ links: [...state.links, link] })),
  removeLink: (link_id: string) =>
    set((state) => ({
      links: state.links.filter((l) => l.link_id !== link_id),
    })),
}));

export default useLinkStore;
