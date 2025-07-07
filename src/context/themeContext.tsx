import { createContext, useState } from "react";

type ThemeMode = "light" | "dark";

type ThemeContextType = {
  theme: ThemeMode;
  setTheme?: (theme: ThemeMode) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
});

export function ThemeContextProvider(props: React.PropsWithChildren) {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const toggleTheme = (theme: ThemeMode) => setTheme(theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
