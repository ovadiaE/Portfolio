import React, {useState, useEffect} from "react";
import HomeParticles from "./particles/HomeParticles";

import {
//  Tetris,
//   Chess,
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


      useEffect(() => {
        const handleKeyDown = (e: { key: string; preventDefault: () => void; }) => {
          if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
            e.preventDefault();
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, []);
      
      useEffect(() => {
        const timeout = setTimeout(() => {
          const keyDownEvent = new KeyboardEvent('keydown', {
            key: 'p',
            code: 'p',
            bubbles: true,
            cancelable: true,
          });
          document.dispatchEvent(keyDownEvent);
      
          const keyUpEvent = new KeyboardEvent('keyup', {
            key: 'p',
            code: 'p',
            bubbles: true,
            cancelable: true,
          });
          document.dispatchEvent(keyUpEvent);
        }, 1000);
      
        return () => clearTimeout(timeout);
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
                {/* <Chess/>
                <Tetris/> */}
                <Contact/>
                <Footer />
                </FadeIn>
            </div>
         </>
    );
}

export default App;