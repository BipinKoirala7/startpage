import { create } from "zustand";

import { linkT } from "../types";

type state = {
    links: Array<linkT>;
};
type action = {
    fetchLinks:(folder_id:string) => void;
    addLink: (link: linkT) => void;
    removeLink: (link_id: string) => void;
};

const useLinkStore = create<state & action>((set) => ({
    links: [],
    fetchLinks: (folder_id: string) => async () => {
        console.log(folder_id);
        // make an api call to fetch links
    },
    addLink: (link: linkT) => set((state) => ({ links: [...state.links, link] })),
    removeLink: (link_id: string) => set((state) => ({ links: state.links.filter((l) => l.link_id !== link_id) })),
}));

export default useLinkStore;