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
            <Grid item> <ProjectCard  image={'(https://images.unsplash.com/photo-1513346940221-6f673d962e97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80.jpg)'}/> </Grid>
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