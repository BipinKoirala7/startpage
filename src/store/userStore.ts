import { create } from "zustand";
import { userT } from "../types";

type state = { user: userT | null };
type action = {
    setUser: (user: userT) => void;
    changeUser: (changeProperty: string, value: string) => void;
}

const useUserStore = create<state & action>((set) => ({
    user: null,
    setUser: (user:userT) => set({ user }),
    changeUser: (changeProperty, value) => set((state) => ({
        ...state, [changeProperty]: value
    }))
}))

export default useUserStore;