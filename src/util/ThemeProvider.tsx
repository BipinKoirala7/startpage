import { ReactNode, useEffect } from "react";
import useThemeStore from "../store/themeStore";

export default function ThemeProvider({children}:{children:ReactNode}){
    const theme = useThemeStore(state=> state.theme);

    useEffect(() => {
        document.documentElement.style.setProperty('--background-color', theme.background_color);
        document.documentElement.style.setProperty('--surface-color', theme.surface_color);
        document.documentElement.style.setProperty('--primary-color', theme.primary_color);
        document.documentElement.style.setProperty('--secondary-color', theme.secondary_color);
        document.documentElement.style.setProperty('--tertiary-color', theme.tertiary_color);
        document.documentElement.style.setProperty('--neutral-color', theme.neutral_color);
        document.documentElement.style.setProperty('--accent-color1', theme.accent_color1);
        document.documentElement.style.setProperty('--accent-color2', theme.accent_color2);
        document.documentElement.style.setProperty('--accent-color3', theme.accent_color3);
        document.documentElement.style.setProperty('--text-color', theme.text_color);
      }, [theme]);

    return children;
}