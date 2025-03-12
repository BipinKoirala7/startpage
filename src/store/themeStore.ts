import { create } from "zustand";

type state = {
  theme: {
    background_color: string;
    surface_color: string;
    primary_color: string;
    secondary_color: string;
    tertiary_color:string;
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
  loadDefaultTheme: () => void;
};

const defaultTheme = {
  background: "#171717",
  surface: "#1c1c1c",
  primary: "#232323",
  secondary: "#2f2f2f",
  tertiary: "#27272a",
  neutral: "#666666",
  accent1: "#ffebcd",
  accent2: "#C94343",
  accent3: "#EB5E28",
  text: "#FFFCF2",
};

const useThemeStore = create<state & action>((set) => ({
  theme: {
    background_color: defaultTheme.background,
    surface_color: defaultTheme.surface,
    primary_color: defaultTheme.primary,
    secondary_color: defaultTheme.secondary,
    tertiary_color: defaultTheme.tertiary,
    neutral_color: defaultTheme.neutral,
    accent_color1: defaultTheme.accent1,
    accent_color2: defaultTheme.accent2,
    accent_color3: defaultTheme.accent3,
    text_color: defaultTheme.text,
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
  loadDefaultTheme: () =>
    set(() => ({
      theme: {
        background_color: defaultTheme.background,
        surface_color: defaultTheme.surface,
        primary_color: defaultTheme.primary,
        secondary_color: defaultTheme.secondary,
        tertiary_color: defaultTheme.tertiary,
        neutral_color: defaultTheme.neutral,
        accent_color1: defaultTheme.accent1,
        accent_color2: defaultTheme.accent2,
        accent_color3: defaultTheme.accent3,
        text_color: defaultTheme.text,
      },
    })),
}));

export default useThemeStore;
