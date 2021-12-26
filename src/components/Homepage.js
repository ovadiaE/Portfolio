import React from 'react'
import HomeParticles from '../graphics/HomeParticles'
import styles from './Homepage.module.scss'
import Button from '@mui/material/Button'
import {Link} from 'react-scroll'
// import DownloadIcon from '@mui/icons-material/Download'


const welcomeText = () => (
    <div id='home' className={styles['wrapper']}>
        <div className={styles['body']}> 
            <span> Hello, I'm <span className={styles['name']}> Ovadia Esquenazi. </span> </span>
            a Full Stack Web Developer.
            <Link  to="Projects" spy={true} smooth={true}>
                <Button className={styles['button']} variant="outlined"> View my work </Button>
            </Link>
            {/* <Button className={styles['CV']} variant="outlined"> CV <DownloadIcon/></Button> */}
        </div>
    </div>
)

const Homepage = () => {
    return (
        <> 
            {welcomeText()}
             <HomeParticles/> 
        </>
    )
}

export default Homepage