import { useContext } from "react";
import { ThemeContext } from "./context/themeContext";
import { Badge } from "./components/Badge/Badge";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  const changeTheme = () => {
    if (!setTheme) return;
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <>
      <div
        className={`h-[120vh]  ${
          theme === "dark" ? "dark" : ""
        } bg-surface text-on-surface dark:bg-surface-dark dark:text-on-surface-dark`}
      >
        <label className="flex items-center justify-center gap-2 p-4">
          <input type="checkbox" className="size-10" onChange={changeTheme} />
          Dark Mode
        </label>
        <Badge text="999+" />
      </div>
    </>
  );
}

export default App;
