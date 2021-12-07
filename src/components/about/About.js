import { useEffect }from 'react'
import styles from './About.module.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Navbar = () => {

    useEffect(()=>{Aos.init({duration: 2000})},[])
    
    return ( 
        <div className={styles['wrapper']}>
            <div data-aos='fade' className={styles['header']}>
                About
            </div>
            
        </div>
    )
}

export default Navbar