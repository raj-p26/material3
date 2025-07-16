import { useContext, useState } from "react";
import { ThemeContext } from "./context/themeContext";
import { Checkbox } from "@components/Checkbox";
import { Dialog } from "@components/Dialog";
import { Button } from "@components/Buttons/Button";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [active, setActive] = useState(false);
  const [buttonSelected, setButtonSelected] = useState(false);

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
        <Button
          onClick={() => {
            // setActive((prev) => !prev);
            setButtonSelected((prev) => !prev);
          }}
          variant="tonal"
          shape="square"
          size="xl"
          toggleButton
          selected={buttonSelected}
          // disabled
        >
          {buttonSelected ? "s" : "u"}
        </Button>

        <Dialog active={active} onClose={() => setActive(false)}>
          <Dialog.Title>Hi</Dialog.Title>
        </Dialog>
      </div>
    </>
  );
}

export default App;
