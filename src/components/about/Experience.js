import React from 'react'
import styles from './Experience.module.scss'
import Grid from '@mui/material/Grid'
import ProjectCard from './ProjectCard'

const Experience = () => {
    
    const header = () => (
        <> 
            <div data-aos='fade-up'>Projects</div>
            <span></span>
        </>
    )

    const projectsGrid = () => (
        <Grid container className={styles['projects-grid']} spacing={5}>
            <Grid item> <ProjectCard/> </Grid>
            <Grid item> <ProjectCard/> </Grid>
        </Grid>
    )
    
    return ( 
        <div data-aos='fade' className={styles['projects-wrapper']}>
            {header()}
            {projectsGrid()}
           
            
        </div>
    )
}

export default Experience