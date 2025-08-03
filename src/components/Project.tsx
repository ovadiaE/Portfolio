import MDCalc from '../assets/images/MDCalc.png';
import Lagoon from '../assets/images/Lagoon.jpeg';
import autofleet from '../assets/images/autofleet.png';
import particle from '../assets/images/particle.png';
import '../assets/styles/Project.scss';

const wigDesign = 'https://static.wixstatic.com/media/e839c0_5d7db8a43c704bd1b7c966f6f99a68c5~mv2.jpg/v1/fill/w_740,h_474,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/e839c0_5d7db8a43c704bd1b7c966f6f99a68c5~mv2.jpg'

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.mdcalc.com/" target="_blank" rel="noreferrer"><img src={MDCalc} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.mdcalc.com/" target="_blank" rel="noreferrer"><h2>MDCalc</h2></a>
                <p>Rebuilt MDCalc's website with Next.js</p>
            </div>
            <div className="project">
                <a href="https://data-lagoon.com/" target="_blank" rel="noreferrer"><img src={Lagoon} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://data-lagoon.com/" target="_blank" rel="noreferrer"><h2>Data Lagoon</h2></a>
                <p>Built dashboards for no-code financial analytics platform</p>
            </div>
            <div className="project">
                <a href="https://autofleet.io/" target="_blank" rel="noreferrer"><img src={autofleet} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://autofleet.io/" target="_blank" rel="noreferrer"><h2>AutoFleet</h2></a>
                <p>QA and automations engineer for AutoFleet</p>
            </div>
            <div className="project">
                <a href="https://github.com/ovadiaE/portfolio-backend" target="_blank" rel="noreferrer"><img src={particle} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/ovadiaE/portfolio-backend" target="_blank" rel="noreferrer"><h2>Particle Animations</h2></a>
                <p>Particle animations with live data - backend services for this page</p>
            </div>
            <div className="project">
                <a href="https://www.youtube.com/watch?v=vQlLMrld96I&list=PLhPlapkNZB7aJrm6cVO8iXg3PRVt6OfOc" target="_blank" rel="noreferrer"><img src={wigDesign} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.youtube.com/watch?v=vQlLMrld96I&list=PLhPlapkNZB7aJrm6cVO8iXg3PRVt6OfOc" target="_blank" rel="noreferrer"><h2>The WIG interactive sculpture</h2></a>
                <p>Provided POC and animation consulting for sculpture displayed at Art Miami</p>
            </div>
            <div className="project">
            <iframe id="13665828" frameBorder="0" style={{width:"100%", height: "80%", border:"none"}} src="https://www.chess.com/emboard?id=13665828"></iframe>
            <a href="https://www.chess.com/emboard?id=13665828" target="_blank" rel="noreferrer"><h2>I like to play chess, chat about tech and drink coffee</h2></a>
            <p>this is an iframe with a recent game of mine from chess.com, add me if you'd like to run a game!</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
