import { createContext, useContext } from "react";
import { useState } from "react";

const darkModeContext = createContext();
export function useDarkMode() {
  const context = useContext(darkModeContext);
  if (!context) throw new Error("There is no context");
  return context;
}

function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  return (
    <darkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </darkModeContext.Provider>
  );
}

export default DarkModeProvider;
