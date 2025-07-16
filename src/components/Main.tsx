import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ovi from '../assets/images/ovi.jpeg'
import '../assets/styles/Main.scss';

function Main() {

  return (
    <>
      <div className="container">
        <div className="about-section">
          <div className="image-wrapper">
            <img src={ovi} alt="Avatar" />
          </div>
          <div className="content">
            <div className="social_icons">
              <a href="https://github.com/ovadiaE" target="_blank" rel="noreferrer"><GitHubIcon/></a>
              <a href="https://www.linkedin.com/in/ovadia-esquenazi-650153211/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            </div>
            <h1 className='mobile-h1'>Ovi</h1>
            <h1 className='full-size-h1'>Ovadia Esquenazi</h1>
            <p>Full Stack Engineer</p>

            <div className="mobile_social_icons">
              <a href="https://github.com/ovadiaE" target="_blank" rel="noreferrer"><GitHubIcon/></a>
              <a href="https://www.linkedin.com/in/ovadia-esquenazi-650153211/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;