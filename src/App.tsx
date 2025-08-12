import { useContext } from "react";
import { ThemeContext } from "./context/themeContext";
import { Checkbox } from "@components/Checkbox";
import { Switch } from "@components/Switch";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    if (!setTheme) return;
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div
        className={`h-[120vh]  ${
          theme === "dark" ? "dark" : ""
        } bg-surface text-on-surface dark:bg-surface-dark dark:text-on-surface-dark`}
      >
        <label className="flex items-center justify-center gap-2 p-4">
          <Checkbox checked={theme === "dark"} onChange={changeTheme} />
          Dark Mode
        </label>
        <Switch />
      </div>
    </>
  );
}

export default App;
