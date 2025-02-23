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
  links: [
    {
      link_id: "001",
      folder_id: "100001",
      link_name: "Facebook",
      link_icon_url: "https://facebook.com/favicon.ico",
      link_background_color: "#1877F2",
      link_url: "https://facebook.com",
      created_At: "2024-02-21T08:00:00Z",
    },
    {
      link_id: "002",
      folder_id: "100002",
      link_name: "Google Drive",
      link_icon_url: "https://drive.google.com/favicon.ico",
      link_background_color: "#FFC107",
      link_url: "https://drive.google.com",
      created_At: "2024-02-21T08:01:00Z",
    },
    {
      link_id: "003",
      folder_id: "100003",
      link_name: "Netflix",
      link_icon_url: "https://netflix.com/favicon.ico",
      link_background_color: "#E50914",
      link_url: "https://netflix.com",
      created_At: "2024-02-21T08:02:00Z",
    },
    {
      link_id: "004",
      folder_id: "100004",
      link_name: "Coursera",
      link_icon_url: "https://coursera.org/favicon.ico",
      link_background_color: "#2A73CC",
      link_url: "https://coursera.org",
      created_At: "2024-02-21T08:03:00Z",
    },
    {
      link_id: "005",
      folder_id: "100005",
      link_name: "Amazon",
      link_icon_url: "https://amazon.com/favicon.ico",
      link_background_color: "#FF9900",
      link_url: "https://amazon.com",
      created_At: "2024-02-21T08:04:00Z",
    },
    {
      link_id: "006",
      folder_id: "100006",
      link_name: "LinkedIn",
      link_icon_url: "https://linkedin.com/favicon.ico",
      link_background_color: "#0A66C2",
      link_url: "https://linkedin.com",
      created_At: "2024-02-21T08:05:00Z",
    },
    {
      link_id: "007",
      folder_id: "100007",
      link_name: "GitHub",
      link_icon_url: "https://github.com/favicon.ico",
      link_background_color: "#181717",
      link_url: "https://github.com",
      created_At: "2024-02-21T08:06:00Z",
    },
    {
      link_id: "008",
      folder_id: "100008",
      link_name: "BBC News",
      link_icon_url: "https://bbc.com/favicon.ico",
      link_background_color: "#BB1919",
      link_url: "https://bbc.com/news",
      created_At: "2024-02-21T08:07:00Z",
    },
    {
      link_id: "009",
      folder_id: "100009",
      link_name: "Spotify",
      link_icon_url: "https://spotify.com/favicon.ico",
      link_background_color: "#1DB954",
      link_url: "https://spotify.com",
      created_At: "2024-02-21T08:08:00Z",
    },
    {
      link_id: "010",
      folder_id: "100010",
      link_name: "Dropbox",
      link_icon_url: "https://dropbox.com/favicon.ico",
      link_background_color: "#0061FF",
      link_url: "https://dropbox.com",
      created_At: "2024-02-21T08:09:00Z",
    },
    {
      link_id: "011",
      folder_id: "100011",
      link_name: "Slack",
      link_icon_url: "https://slack.com/favicon.ico",
      link_background_color: "#4A154B",
      link_url: "https://slack.com",
      created_At: "2024-02-21T08:10:00Z",
    },
    {
      link_id: "012",
      folder_id: "100012",
      link_name: "Figma",
      link_icon_url: "https://figma.com/favicon.ico",
      link_background_color: "#F24E1E",
      link_url: "https://figma.com",
      created_At: "2024-02-21T08:11:00Z",
    },
    {
      link_id: "013",
      folder_id: "100013",
      link_name: "YouTube",
      link_icon_url: "https://youtube.com/favicon.ico",
      link_background_color: "#FF0000",
      link_url: "https://youtube.com",
      created_At: "2024-02-21T08:12:00Z",
    },
    {
      link_id: "014",
      folder_id: "100014",
      link_name: "PayPal",
      link_icon_url: "https://paypal.com/favicon.ico",
      link_background_color: "#003087",
      link_url: "https://paypal.com",
      created_At: "2024-02-21T08:13:00Z",
    },
    {
      link_id: "015",
      folder_id: "100015",
      link_name: "Airbnb",
      link_icon_url: "https://airbnb.com/favicon.ico",
      link_background_color: "#FF5A5F",
      link_url: "https://airbnb.com",
      created_At: "2024-02-21T08:14:00Z",
    },
    {
      link_id: "016",
      folder_id: "100016",
      link_name: "Instagram",
      link_icon_url: "https://instagram.com/favicon.ico",
      link_background_color: "#E4405F",
      link_url: "https://instagram.com",
      created_At: "2024-02-21T08:15:00Z",
    },
    {
      link_id: "017",
      folder_id: "100017",
      link_name: "Notion",
      link_icon_url: "https://notion.so/favicon.ico",
      link_background_color: "#000000",
      link_url: "https://notion.so",
      created_At: "2024-02-21T08:16:00Z",
    },
    {
      link_id: "018",
      folder_id: "100018",
      link_name: "Stack Overflow",
      link_icon_url: "https://stackoverflow.com/favicon.ico",
      link_background_color: "#F48024",
      link_url: "https://stackoverflow.com",
      created_At: "2024-02-21T08:17:00Z",
    },
    {
      link_id: "019",
      folder_id: "100019",
      link_name: "Discord",
      link_icon_url: "https://discord.com/favicon.ico",
      link_background_color: "#5865F2",
      link_url: "https://discord.com",
      created_At: "2024-02-21T08:18:00Z",
    },
    {
      link_id: "020",
      folder_id: "100020",
      link_name: "Microsoft OneDrive",
      link_icon_url: "https://onedrive.live.com/favicon.ico",
      link_background_color: "#0078D4",
      link_url: "https://onedrive.live.com",
      created_At: "2024-02-21T08:19:00Z",
    },
  ],
  fetchLinks: (folder_id: string) => async () => {
    console.log(folder_id);
    // make an api call to fetch links
  },
  addLink: (link: linkT) => set((state) => ({ links: [...state.links, link] })),
  removeLink: (link_id: string) =>
    set((state) => ({
      links: state.links.filter((l) => l.link_id !== link_id),
    })),
}));

export default useLinkStore;