import { createContext, useContext, useState, type ReactNode } from "react"
type DarkModeContextType = {
    isDark: boolean,
    toggleTheme: () => void
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

export const DarkModeProvider = ( { children }: { children: ReactNode } ) => {
    const [ isDark, setIsDark ] = useState<boolean>(true)
    const toggleTheme = () => {
        setIsDark((prev) => !prev)
        document.documentElement.classList.toggle('dark', isDark);
    }
    if( prefersDark ) document.documentElement.classList.toggle('dark', isDark);
    
    return (
        <DarkModeContext.Provider value={{ isDark, toggleTheme }}>
        {children}
        </DarkModeContext.Provider>
    );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used inside a DarkModeProvider");
  }
  return context;
}