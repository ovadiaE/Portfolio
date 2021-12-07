import { useEffect }from 'react'
import styles from './About.module.scss'
import Grid from '@mui/material/Grid'
import CodeSharpIcon from '@mui/icons-material/CodeSharp'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {

    useEffect(()=>{Aos.init({duration: 2000})},[])

    const header = () => (
        <div className={styles['wrapper']}>
            <div data-aos='fade' className={styles['header']}>About</div>
            <Grid data-aos='fade' container spacing={6} className={styles['buzzword-grid']}>
                <Grid item className={styles['buzzword-item']}> {iconDiv(<CodeSharpIcon/>)} </Grid>
                <Grid item className={styles['buzzword-item']}> <item>Hello</item> </Grid>
                <Grid item className={styles['buzzword-item']}> <item>Hello</item> </Grid>
                <Grid item className={styles['buzzword-item']}> <item>Hello</item> </Grid>
            </Grid>
        </div>
     )

     const iconDiv = (icon) => (
        <item>
            <div className={styles['icon']}>
                {icon}
            </div>
        </item>
     )
     
     return ( 
         header()
    )
}

export default About