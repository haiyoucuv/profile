import { createRoot } from "react-dom/client";

import '@unocss/reset/normalize.css';

import './i18n';

import 'virtual:uno.css'
import 'virtual:unocss-devtools';

import "./index.less";
import App from "./App.tsx";

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)

// import init from "./assembly/index.ts?asc";
//
// console.log(init)
//
// const fib = (n) => {
//     if (n <= 1) return n
//     return fib(n-1) + fib(n-2)
// }
//
// init().then((module) => {
//     console.log(module)
// })
