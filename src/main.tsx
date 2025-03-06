import { createRoot } from "react-dom/client";

import '@unocss/reset/normalize.css';

import './i18n';

import 'virtual:uno.css'
import 'virtual:unocss-devtools';

import "./index.less";
import App from "./App.tsx";
import { StrictMode } from "react";

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)
