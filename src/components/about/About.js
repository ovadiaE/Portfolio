import { useEffect }from 'react'
import styles from './About.module.scss'
import Grid from '@mui/material/Grid'
import CodeSharpIcon from '@mui/icons-material/CodeSharp'
import VisibilityIcon from '@mui/icons-material/Visibility'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    
    const text = {
         first:  'A passion for development and a can do attitude.', 
         second: 'An eye for detail and emphasis on aesthetics',
         third: 'Clean code and working products delivered on time',
         fourth: 'Fast and responsive designs for applications on any platform'
    } 
    
    useEffect(()=>{Aos.init({duration: 2000})},[])

    const iconDiv = (icon, text) => (
        <item>
            <div className={styles['icon']}>
                {icon}
                <span className={styles['text']}>{text}</span>
            </div>
        </item>
    )

    const header = () => (
        <div className={styles['wrapper']}>
            <div data-aos='fade' className={styles['header']}>I Bring</div>
            <Grid data-aos='fade' container spacing={6} className={styles['buzzword-grid']}>
                <Grid item className={styles['buzzword-item']}>{iconDiv(<CodeSharpIcon style={{fontSize:80}}/>, text.first)}</Grid>
                <Grid item className={styles['buzzword-item']}>{iconDiv(<VisibilityIcon style={{fontSize:80}}/>, text.second)}</Grid>
                <Grid item className={styles['buzzword-item']}>{iconDiv(<PhoneIphoneIcon style={{fontSize:80}}/>, text.fourth)} </Grid>
                <Grid item className={styles['buzzword-item']}>{iconDiv(<AccessTimeIcon style={{fontSize:80}}/>, text.third)} </Grid>
            </Grid>
        </div>
     )
     
     return ( 
         header()
    )
}

export default About