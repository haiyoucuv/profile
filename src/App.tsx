import React, { useEffect, useRef, useState } from "react";

import "./App.less";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import { Intro } from "./components/Intro.tsx";
import { About } from "./components/About.tsx";
import Experience from "./components/Experience.tsx";
import { Technology } from "./components/Tech.tsx";
import Works from "./components/Works.tsx";
import Feedbacks from "./components/Feedbacks.tsx";
import Contact from "./components/Contact.tsx";
import { ContactCanvas } from "./components/ContactCanvas.tsx";


function App() {
    return <BrowserRouter>
        <div className="relative z-0">
            <div>
                <Navbar />
                <Intro />
            </div>
            <About />
            <Experience />
            <Technology />
            <Works />
            {/*<Feedbacks />*/}
            <div className="relative z-0">
                <Contact />
                {/*<ContactCanvas />*/}
                {/*<StarsCanvas />*/}
            </div>
        </div>
    </BrowserRouter>;
}

export default App;
