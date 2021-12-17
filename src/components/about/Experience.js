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
            <Grid item> <ProjectCard photo={('https://i-invdn-com.investing.com/news/gold3_800x533_L_1412152987.jpg')}/> </Grid>
            <Grid item> <ProjectCard  photo={'https://cdn.vubootcamps.com/wp-content/uploads/sites/103/2018/12/coding.jpg'}/> </Grid>
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