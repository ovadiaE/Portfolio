import React, {useState, useEffect} from "react";
import HomeParticles from "./particles/HomeParticles";

import {
  Chess,
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
        <>
             <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
                
                <div className={'particle-container'}> 
                    <HomeParticles/>
                </div>
                <FadeIn>
                <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
                <Main/>
                <Expertise/>
                <Timeline/>
                <Project/>
                <Chess/>
                <Contact/>
                <Footer />
                </FadeIn>
            </div>
         </>
    );
}

export default App;