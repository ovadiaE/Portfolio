import { useEffect }from 'react'
import SkillsCloud from '../graphics/SkillsCloud'
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
         first:  'A passion for development.', 
         second: 'An eye for detail.',
         third: 'Responsive design.',
         fourth: 'clean code, on time.',
    } 
    
    useEffect(()=>{Aos.init({duration: 1000})},[])

    const iconDiv = (icon, text) => (
        <item>
            <div className={styles['icon']}>
                {icon}
                <span className={styles['text']}>{text}</span>
            </div>
        </item>
    )

    const header = () => (
        <>
        <div data-aos='fade' className={styles['header']}>About</div>
            <span data-aos='fade' className={styles['underline']}></span>
            
            <Grid data-aos='fade' container spacing={5} className={styles['buzzword-grid']}>
                <Grid item >{iconDiv(<CodeSharpIcon className={styles['buzzword-item']} />, text.first)}</Grid>
                <Grid item >{iconDiv(<VisibilityIcon className={styles['buzzword-item']}/>, text.second)}</Grid>
                <Grid item >{iconDiv(<PhoneIphoneIcon className={styles['buzzword-item']} />, text.third)} </Grid>
                <Grid item >{iconDiv(<AccessTimeIcon className={styles['buzzword-item']} />, text.fourth)} </Grid>
            </Grid>
        </>
    )

    const image = () => (
        <img  
            src="\images\profile (2).jpg"
            width='300'
            height= '300'
            alt='alt'
            className={styles['photo']}>
        </img>
    )

    const description = () =>( 
        <div className={styles['description']}>
            <span> Who am I? </span> 
            <div></div>
            <span> I'm a full Stack Developer Based in Tel Aviv and the U.S.</span> 
            <span> I have an appreciation for design and a passion for problem solving. </span> 
            <span>Let's make something <span className={styles['great']}>great.</span> </span> 
        </div>
    )

    const skills = () => (
        <div data-aos='fade' className={styles['skills']}>
            <span>Skills</span>
            <div></div>
            <SkillsCloud/>
        </div>
    )

     const body = () => (
         <div data-aos='flip-up' className={styles['body-wrapper']}>
             <div className={styles['profile-wrapper']}>
                 {image()}
                 {description()}
             </div>
             {skills()}
        </div>
     )

    return ( 
        <div id='About' data-aos='fade' className={styles['wrapper']}>
            {header()}
            {body()}
        </div>
    )
}

export default About