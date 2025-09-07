import '../../assets/styles/Tetris-desktop.scss';
import Tetris from 'react-tetris';
import { useState, useEffect } from 'react';

function TetrisDesktop() {

  const DesktopControls = () => (
    <>
      <p><strong>Controls:</strong></p>
      <p>P: Play / Pause</p>
      <p>Arrow Keys: move</p>
      <p>Space: drop piece</p>
      <p>Shift / C: hold piece</p>
    </>
  );
  
  const [controller, setController] = useState<any>(null);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  // Pause the game as soon as controller becomes available
  useEffect(() => {
    if (controller) {
      controller.pause();
    }
  }, [controller]);

  const restartGame = () => {
    if (controller) {
      controller.restart();
      controller.pause(); // keep frozen until user presses "p"
    }
  };

  return (
    <div className="tetris-container">
      <h1>Tetris</h1>
      <Tetris
        keyboardControls={{
          down: 'MOVE_DOWN',
          left: 'MOVE_LEFT',
          right: 'MOVE_RIGHT',
          space: 'HARD_DROP',
          z: 'FLIP_COUNTERCLOCKWISE',
          x: 'FLIP_CLOCKWISE',
          up: 'FLIP_CLOCKWISE',
          p: 'TOGGLE_PAUSE',
          c: 'HOLD',
          shift: 'HOLD',
        }}
      >
        {({
          HeldPiece,
          Gameboard,
          PieceQueue,
          points,
          linesCleared,
          state,
          controller: tetrisCtrl,
        }) => {
          if (!controller && tetrisCtrl) {
            setController(tetrisCtrl);
          }

          return (
            <div className="board-container" id="tetris">
              <div className="controls">
                 <DesktopControls/>
              <div className="game-data">
                <p>Points: {points}</p>
                <p>Lines Cleared: {linesCleared}</p>
                <div className="held-piece">
                  <HeldPiece />
                </div>
              </div>

                {state === 'LOST' && (
                  <div>
                    <h2>Game Over</h2>
                    <button className="reset-button" onClick={restartGame}>
                      New Game
                    </button>
                  </div>
                )}
              </div>
              <Gameboard />
              <PieceQueue />
            </div>
          );
        }}
      </Tetris>
    </div>
  );
}

export default TetrisDesktop;
