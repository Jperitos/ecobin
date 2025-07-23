import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";

export const useTheme = () => {
  const colorScheme = useColorScheme(); // "light" | "dark"
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");

  useEffect(() => {
    setIsDarkMode(colorScheme === "dark");
  }, [colorScheme]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return { isDarkMode, toggleDarkMode };
};
