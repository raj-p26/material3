import { useContext, useState } from "react";
import { ThemeContext } from "./context/themeContext";
import { Checkbox } from "./components/Checkbox";
import { Card } from "./components/Card";
import { Button } from "./components/Buttons/Button";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [check, setCheck] = useState<boolean>(true);
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
          <Checkbox checked={theme === "dark"} onChange={changeTheme} />
          Dark Mode
        </label>

        <Checkbox checked={check} onChange={() => setCheck((prev) => !prev)} />

        <Card>
          <div className="size-30"></div>
        </Card>
        <Button size="xs">Helllloooooooo</Button>
      </div>
    </>
  );
}

export default App;
