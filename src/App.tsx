import { useContext, useState } from "react";
import { ThemeContext } from "./context/themeContext";
import { Checkbox } from "@components/Checkbox";
import { Button } from "@components/Buttons/Button";
import { SideSheet } from "@components/Sheets";
import { useSnackbar } from "./hooks/useSnackbar";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  const [showSheet, setShowSheet] = useState<boolean>(false);
  const setContent = useSnackbar();

  const changeTheme = () => {
    if (!setTheme) return;
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const showSnackbar = () => {
    setContent("Hello from snackbar");
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

        <Button
          onClick={() => {
            setShowSheet(true);
          }}
        >
          Show bottom sheet
        </Button>

        <SideSheet
          active={showSheet}
          title="Hello from side sheet"
          onDismiss={() => setShowSheet(false)}
        >
          <Button variant="elevated">Hello</Button>
        </SideSheet>
        <Button onClick={showSnackbar}>Show Snackbar</Button>
      </div>
    </>
  );
}

export default App;
