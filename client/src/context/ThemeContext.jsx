/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const THEME_STORAGE_KEY = "portfolio-theme";

const themes = {
  dark: {
    "--bg": "#0B0B0B",
    "--text": "#E7D7B5",
    "--text-dim": "#CFC2A1",
    "--muted": "#A69B85",
    "--accent": "#B3C300",
    "--border": "rgba(255,255,255,0.08)",
    "--card": "rgba(255,255,255,0.04)",
    "--shadow": "0 12px 34px rgba(0,0,0,.35)",
    "--nav-bg": "rgba(11,11,11,.86)",
    "--code-bg": "rgba(255,255,255,.035)",
    "--code-header-bg": "rgba(255,255,255,.04)",
    "--glass-bg": "rgba(0,0,0,.58)",
    "--glass-border": "rgba(255,255,255,.06)",
    "--btn-bg": "rgba(255,255,255,.05)",
    "--btn-hover": "rgba(255,255,255,.1)",
    "--accent-rgb": "179, 195, 0",
  },
  light: {
    "--bg": "#F5F0E8",
    "--text": "#2D2A24",
    "--text-dim": "#4A4640",
    "--muted": "#5C5750",
    "--accent": "#90A800",
    "--border": "rgba(0,0,0,0.1)",
    "--card": "rgba(0,0,0,0.03)",
    "--shadow": "0 12px 34px rgba(0,0,0,.1)",
    "--nav-bg": "rgba(245,240,232,.92)",
    "--code-bg": "rgba(0,0,0,.03)",
    "--code-header-bg": "rgba(0,0,0,.04)",
    "--glass-bg": "rgba(255,255,255,.7)",
    "--glass-border": "rgba(0,0,0,.1)",
    "--btn-bg": "rgba(0,0,0,.05)",
    "--btn-hover": "rgba(0,0,0,.08)",
    "--accent-rgb": "144, 168, 0",
  },
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    return saved || "dark";
  });

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    const root = document.documentElement;
    const themeVars = themes[theme];
    Object.entries(themeVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    root.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
