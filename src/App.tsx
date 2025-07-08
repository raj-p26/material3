import { useContext } from "react";
import { ThemeContext } from "./context/themeContext";
import { AppBar } from "./components/AppBar";

function App() {
  const backIcon = (
    <span className="material-symbols-outlined">arrow_back</span>
  );
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
        <AppBar
          title="Headline"
          leading={backIcon}
          subtitle="Subtitle"
          centered
        />
        <div className="h-4"></div>
        <AppBar
          title="Headline"
          leading={backIcon}
          subtitle="Subtitle"
          size="md"
          centered
        />
        <div className="h-4"></div>
        <AppBar
          title="Headline"
          leading={backIcon}
          subtitle="Subtitle"
          size="lg"
        />
      </div>
    </>
  );
}

export default App;
