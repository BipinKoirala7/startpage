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
    background_color: "#1c1c1c",
    surface_color: "#232323",
    primary_color: "#2f2f2f",
    secondary_color: "#27272a",
    tertiary_color: "#C6A5F1",
    neutral_color: "#666666",
    accent_color1: "#ffebcd",
    accent_color2: "#C94343",
    accent_color3: "#EB5E28",
    text_color: "#FFFCF2",
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
