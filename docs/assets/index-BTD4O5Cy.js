import{i as l,a as d,r as u,L as m,j as a,e as s,b as f,c as p,R as h,d as R}from"./vendor-KLADBbQd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const w={en:{translation:{"Welcome to React":"Welcome to React and react-i18next"}},fr:{translation:{"Welcome to React":"Bienvenue à React et react-i18next"}}};l.use(d).init({resources:w,lng:"en",interpolation:{escapeValue:!1}});async function y(){await s.initialize({wasmURL:f});const o=await s.transform(`
         function App() {
            return <div>Hello World</div>
        }
        
        ReactDomClient.createRoot(document.getElementById('root')!).render(
            <App />
        )
    `,{loader:"tsx"});return s.stop(),o}function g(){return u.useEffect(()=>{const r=document.createElement("iframe"),o=new m({title:"Window Title",x:50,y:50,width:800,height:600,content:r});return o.show(),y().then(n=>{r.srcdoc=`
                <!DOCTYPE html>
                <html lang="zh">
                <head>
                    <meta charset="UTF-8">
                    <title>Document</title>
                </head>
                <body>
                    <div id="root"></div>
                    <script>
                        window.React = top.React;
                        window.ReactDomClient = top.ReactDomClient;
                        ${n.code}
                    <\/script>
                </body>
                </html>
            `}),()=>{o.destroy()}},[]),a.jsx("div",{className:"relative z-0"})}p.createRoot(document.getElementById("root")).render(a.jsx(g,{}));window.React=h;window.ReactDomClient=R;
