import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeContextProvider } from "./context/themeContext.tsx";
import { SnackbarProvider } from "@components/Snackbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SnackbarProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </SnackbarProvider>
  </StrictMode>
);
