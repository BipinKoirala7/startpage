import { create } from "zustand";

type state = {
  theme: {
    background_color: string;
    surface_color: string;
    primary_color: string;
    secondary_color: string;
    neutral_color: string;
    accent_color1: string;
    accent_color2: string;
    accent_color3: string;
    text_color: string;
  };
};

type action = {
  setBackgroundColor: (color: string) => void;
  setSurfaceColor: (color: string) => void;
  setPrimaryColor: (color: string) => void;
  setSecondaryColor: (color: string) => void;
  setNeutralColor: (color: string) => void;
  setAccentColor1: (color: string) => void;
  setAccentColor2: (color: string) => void;
  setAccentColor3: (color: string) => void;
  setTextColor: (color: string) => void;
};

const useThemeStore = create<state & action>((set) => ({
  theme: {
    background_color: "",
    surface_color: "",
    primary_color: "",
    secondary_color: "",
    neutral_color: "",
    accent_color1: "",
    accent_color2: "",
    accent_color3: "",
    text_color: "",
  },
  setBackgroundColor: (color: string) =>
    set((state) => ({ theme: { ...state.theme, backgroundColor: color } })),
  setSurfaceColor: (color: string) =>
    set((state) => ({ theme: { ...state.theme, surfaceColor: color } })),
  setPrimaryColor: (color: string) =>
    set((state) => ({ theme: { ...state.theme, primaryColor: color } })),
  setSecondaryColor: (color: string) =>
    set((state) => ({ theme: { ...state.theme, secondaryColor: color } })),
  setNeutralColor: (color: string) =>
    set((state) => ({ theme: { ...state.theme, neutralColor: color } })),
  setAccentColor1: (color: string) =>
    set((state) => ({ theme: { ...state.theme, accentColor1: color } })),
  setAccentColor2: (color: string) =>
    set((state) => ({ theme: { ...state.theme, accentColor2: color } })),
  setAccentColor3: (color: string) =>
    set((state) => ({ theme: { ...state.theme, accentColor3: color } })),
  setTextColor: (color: string) =>
    set((state) => ({ theme: { ...state.theme, textColor: color } })),
}));

export default useThemeStore;
