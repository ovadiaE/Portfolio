// import TetrisMobile from './Tetris-Mobile'
import TetrisDesktop from './Tetris-Desktop';
import { useState, useEffect } from 'react';

function TetrisWindow() { 

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);
  
  return  width > 400 ?<TetrisDesktop/> : null
  
}

export default TetrisWindow;
