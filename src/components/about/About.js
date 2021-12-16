import { useEffect }from 'react'
import SkillsCloud from '../../particles/SkillsCloud'
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
         description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley'
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
        <>
            <div data-aos='fade' className={styles['header']}>I Bring</div>
            <span data-aos='fade' className={styles['underline']}></span>
            <Grid data-aos='fade' container spacing={5} className={styles['buzzword-grid']}>
                <Grid item className={styles['buzzword-item']}>{iconDiv(<CodeSharpIcon style={{fontSize:60}}/>, text.first)}</Grid>
                <Grid item className={styles['buzzword-item']}>{iconDiv(<VisibilityIcon style={{fontSize:60}}/>, text.second)}</Grid>
                <Grid item className={styles['buzzword-item']}>{iconDiv(<PhoneIphoneIcon style={{fontSize:60}}/>, text.third)} </Grid>
                <Grid item className={styles['buzzword-item']}>{iconDiv(<AccessTimeIcon style={{fontSize:60}}/>, text.fourth)} </Grid>
            </Grid>
        </>
    )

     const body = () => (
         <div data-aos='fade' className={styles['body-wrapper']}>
             <div className={styles['profile-wrapper']}>
                 <img  
                     src="\images\profile (2).jpg"
                     width='300'
                     height= '300'
                     alt='alt'
                     className={styles['photo']}>
                </img>
                
                <div className={styles['description']}>
                    <span> Who am I? </span> 
                    <div></div>
                    <span> I'm a full Stack Developer Based in Tel Aviv and the U.S.</span> 
                    <span> I have an appreciation for design and a passion for problem solving. </span> 
                    <span>Let's make something <span className={styles['great']}>great.</span> </span> 
                </div>
            </div>
             <div data-aos='fade' className={styles['skills']}>
                 <span>Skills</span>
                 <div></div>
                 <SkillsCloud/>
             </div>
        </div>
     )

     
     
     return ( 
         <> 
            <div data-aos='fade' className={styles['wrapper']}>
                {header()}
                {body()}
            </div>
            

        </>
    )
}

export default About