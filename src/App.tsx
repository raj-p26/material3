import { useContext } from "react";
import { ThemeContext } from "./context/themeContext";
import { FloatingActionButton } from "./components/Buttons/FloatingActionButton";

function App() {
  const addIcon = <span className="material-symbols-outlined">add</span>;
  const variants = ["primary", "secondary", "tertiary"] as const;
  const { theme, setTheme } = useContext(ThemeContext);
  const changeTheme = () => {
    if (!setTheme) return;
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <>
      <div
        className={`h-[100vh]  ${
          theme === "dark" ? "dark" : ""
        } bg-surface text-on-surface dark:bg-surface-dark dark:text-on-surface-dark`}
      >
        <label className="flex items-center justify-center gap-2 p-4">
          <input type="checkbox" className="size-10" onChange={changeTheme} />
          Dark Mode
        </label>
        <div className="flex flex-col justify-center space-y-4 p-4">
          {variants.map((variant, idx) => (
            <FloatingActionButton variant={variant} key={idx} type="base">
              {addIcon}
            </FloatingActionButton>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
