import { useEffect, useRef, useState } from "react";

import "./App.less";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import { Intro } from "./components/Intro.tsx";

function App() {
    return <BrowserRouter>
        <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Intro />
            </div>
            {/*<About />*/}
            {/*<Experience />*/}
            {/*<Tech />*/}
            {/*<Works />*/}
            {/*<Feedbacks />*/}
            {/*<div className="relative z-0">*/}
            {/*    <Contact />*/}
            {/*    <StarsCanvas />*/}
            {/*</div>*/}
        </div>
    </BrowserRouter>;
}

export default App;
