import { createRoot } from "react-dom/client";

// import "@csstools/normalize.css";

import "./index.less";
import App from "./App.tsx";
import { StrictMode } from "react";

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)
