import { useContext /*, useEffect */, useState } from "react";
import { ThemeContext } from "./context/themeContext";
import { Checkbox } from "@components/Checkbox";
import { Menu } from "@components/Menu";
import Plus from "@icons/Plus";
import Check from "@icons/Check";
import { Button } from "@components/Buttons/Button";
import { ListItem } from "@components/List";
// import { Progress } from "@components/Progress/Progress";
// import { Button } from "@components/Buttons/Button";
// import Plus from "@icons/Plus";
// import Minus from "@icons/Minus";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  // const [progress, setProgress] = useState<number>(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setProgress((prevProgress) => {
  //       if (prevProgress < 100) {
  //         return prevProgress + 1;
  //       } else {
  //         clearInterval(interval);
  //         return prevProgress;
  //       }
  //     });
  //   }, 100);

  //   return () => clearInterval(interval);
  // }, []);
  const [showMenu, setShowMenu] = useState<boolean>(false);

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
        {/* <Button icon={<Plus />} onClick={() => setProgress((pre) => pre + 10)}>
          10
        </Button>
        <Button icon={<Minus />} onClick={() => setProgress((pre) => pre - 10)}>
          10
        </Button> */}
        {/* <Progress value={progress} max={100} /> */}
        <Button onClick={() => setShowMenu((pre) => !pre)}>
          {showMenu ? "Hide Menu" : "Show Menu"}
        </Button>
        <Menu active={showMenu}>
          <Menu.Item
            leading={<Plus />}
            onClick={() => console.log("hi")}
            labelText="Hello"
          />
          <Menu.Item labelText="Hi" disabled />
          <Menu.Item labelText="Hola" trailing={<Check />} />
        </Menu>
        <ListItem label="Hi" onClick={() => alert("hi")} />
      </div>
    </>
  );
}

export default App;
