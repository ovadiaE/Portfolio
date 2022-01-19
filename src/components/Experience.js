import React from 'react'
import styles from './Experience.module.scss'
import Grid from '@mui/material/Grid'
import ProjectCard from './ProjectCard'

const Experience = () => {
    
    const header = () => (
        <> 
            <div className={styles['header']} data-aos='fade-up'>Projects</div>
            <span className={styles['underline']}></span>
        </>
    )

    const projectsGrid = () => (
        <Grid container className={styles['projects-grid']} spacing={5}>
            <Grid item> 
                <ProjectCard 
                    image={'(https://images.unsplash.com/photo-1513346940221-6f673d962e97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80.jpg)'}
                    projectName='Weight In Gold'
                    projectDescription={"An interactive art installation on display as part of Atelier Benito's Joy of Life Exhibit, provides the user with the value of their weight in gold calculated in real time."}
                    projectLink={'https://www.instagram.com/p/CW9HxhAAoS6/'}
                    frontend={'https://github.com/ovadiaE/weight-in-gold-frontend'}
                    backend={'https://github.com/ovadiaE/Weight-In-Gold'}/> 
            </Grid>
            <Grid item>
                <ProjectCard
                 image={'(https://www.ukrgate.com/eng/wp-content/uploads/2021/04/The-Rains-Continue-For-Today-in-Ukraine1.jpg)'}
                 projectName='Weather app'
                 projectDescription={"Simple weather casting using React and open weather API"}
                 projectLink={'https://determined-perlman-b70726.netlify.app/'}
                 frontend={'https://github.com/ovadiaE/weatherApp'}
              /> 
            </Grid>
        </Grid>
    )
    
    return ( 
        <div id='Projects' data-aos='fade' className={styles['projects-wrapper']}>
            {header()}
            {projectsGrid()}
        </div>
        )
    }

export default Experience

