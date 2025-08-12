import '../assets/styles/Chess.scss';

function Chess() {
    return (
        <div className="chess-container" >
            <div className="puzzle-container">
             <h1>Puzzle of the day</h1>
             <iframe title="lichess-daily" id="13665829" src="https://lichess.org/training/frame?theme=brown&bg=dark" frameBorder="0"></iframe>
            </div>

            <div className="puzzle-container">
             <h1>Lichess - Live Arena</h1>
             <iframe src="https://lichess.org/tv/frame?theme=brown&bg=dark" frameBorder="0"></iframe>            
            </div>
        </div>  
    );
}

export default Chess;