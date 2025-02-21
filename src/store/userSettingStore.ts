import { create } from "zustand";

type state = {
  main: {
    backgroundColor: string | null,
    background_image_url: string | null,
    preference:"light" | "dark" | "system",
    };
    leftSideBar: {
        backgroundColor: string | null,
        backdropFilter: number | null,
    }
};

type action = {
    setBackgroundColor: (color: string) => void;
    // write more actions
};

const useUserSettingStore = create<state & action>((set) => ({
    main: {
        backgroundColor: "default",
        background_image_url: null,
        preference: "system",
    },
    leftSideBar: {
        backgroundColor: "default",
        backdropFilter: null,
    },
    setBackgroundColor: (color: string) => set((state) => ({ main: { ...state.main, backgroundColor: color } })),
}))

export default useUserSettingStore;