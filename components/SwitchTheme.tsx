import React, { useEffect } from "react";
import { useLocalStorage } from "use-hooks";

const SwitchTheme = () => {
  //we store the theme in localStorage to preserve the state on next visit with an initial theme of dark.
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  //toggles the theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  //modify data-theme attribute on document.body when theme changes
  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <button className="btn btn-circle" onClick={toggleTheme}>
      Change Theme
    </button>
  );
};
export default SwitchTheme;