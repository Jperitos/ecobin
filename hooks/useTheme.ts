// hooks/useTheme.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Appearance } from "react-native";

export function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const loadTheme = async () => {
      const stored = await AsyncStorage.getItem("theme");
      if (stored === "dark") setIsDarkMode(true);
      else if (stored === "light") setIsDarkMode(false);
      else {
        const system = Appearance.getColorScheme();
        setIsDarkMode(system === "dark");
      }
    };
    loadTheme();
  }, []);

  const toggleDarkMode = async () => {
    const newValue = !isDarkMode;
    setIsDarkMode(newValue);
    await AsyncStorage.setItem("theme", newValue ? "dark" : "light");
  };

  return { isDarkMode, toggleDarkMode };
}
