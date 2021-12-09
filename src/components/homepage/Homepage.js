import React from 'react'
import HomeParticles from '../../particles/HomeParticles'
import styles from './Homepage.module.scss'
import Button from '@mui/material/Button'

const welcomeText = () => (
    <div className={styles['wrapper']}>
        <div className={styles['body']}> 
            <span> Hello, I'm <span className={styles['name']}> Ovadia Esquenazi, </span> </span>
            a Full Stack Web Developer.
            <Button className={styles['button']} variant="outlined"> View my work </Button>
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