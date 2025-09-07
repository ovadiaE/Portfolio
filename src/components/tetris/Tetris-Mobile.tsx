import '../../assets/styles/Tetris-mobile.scss';
import Tetris from 'react-tetris';
import { useState } from 'react';

function TetrisMobile() {
    
  const [controller, setController] = useState<any>(null);
  
  const MobileControls = ({ controller }: { controller: any }) => (
    <div className="mobile-controls-container"> 
      <div className="touch-controls"> 
        <div className="top-key"> 
        <p onClick={() => controller?.hardDrop()}>drop</p>
          <span onClick={() => controller?.flipClockwise()}>⟳</span>
          <p onClick={() => controller?.hold()}>save</p>
        </div>
  
        <div className="bottom-keys"> 
          <span onClick={() => controller?.moveLeft()}>←</span>
          <span onClick={() => controller?.moveDown()}>↓</span>
          <span onClick={() => controller?.moveRight()}>→</span>
        </div>
      </div>
    </div>
  );

  const restartGame = () => {
    if (controller) {
      controller.restart();
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
          state,
          controller: tetrisCtrl,
        }) => {
          if (!controller && tetrisCtrl) {
            setController(tetrisCtrl);
          }

          return (
            <div className="mobile-board-container" id="tetris">
                {state === 'LOST' && (
                  <div className="play-button">
                    <h2>Game Over</h2>
                    <button className="reset-button" onClick={restartGame}>
                      New Game
                    </button>
                  </div>
                )}
                <div className="mobile-top-section-container">
                  <HeldPiece />
                </div>
              <MobileControls controller={tetrisCtrl} /> 
              <Gameboard />
              <MobileControls controller={tetrisCtrl} /> 
            </div>
          );
        }}
      </Tetris>
    </div>
  );
}

export default TetrisMobile;
