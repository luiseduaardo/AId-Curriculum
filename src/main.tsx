
  import { createRoot } from "react-dom/client";
  import App from "./App";
  import "./index.css";
  import "./styles/globals.css";
  import { Toaster } from "./components/ui/sonner";

  createRoot(document.getElementById("root")!).render(
    <>
      <App />
      <Toaster richColors position="top-right" />
    </>
  );
  