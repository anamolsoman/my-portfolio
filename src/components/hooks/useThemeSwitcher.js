import React, { useEffect, useState } from "react";

function useThemeSwitcher() {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState(null); // Start with null to indicate initial loading state

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia(preferDarkQuery);
      const userPref = window.localStorage.getItem("theme");
      const initialMode = userPref
        ? userPref
        : mediaQuery.matches
        ? "dark"
        : "light";
      setMode(initialMode);

      const handleChange = () => {
        const newMode = mediaQuery.matches ? "dark" : "light";
        setMode(newMode);
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  useEffect(() => {
    if (mode !== null) {
      // Only update localStorage and document class after mode is set
      if (mode === "dark") {
        window.localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      } else {
        window.localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      }
    }
  }, [mode]);

  return [mode, setMode];
}

export default useThemeSwitcher;
