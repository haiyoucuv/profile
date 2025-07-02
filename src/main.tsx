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
// const fib = (n) => {
//     if (n <= 1) return n
//     return fib(n-1) + fib(n-2)
// }
//
// init().then((module) => {
//     const { fibonacci } = module.exports
//     console.time('wasm')
//     console.log(fibonacci(30))
//     console.timeEnd('wasm')
//     console.time('js')
//     console.log(fib(30))
//     console.timeEnd('js')
// })
