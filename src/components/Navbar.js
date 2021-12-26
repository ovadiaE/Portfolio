import { useState } from 'react';
import {Link} from 'react-scroll'
import styles from './Navbar.module.scss'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import 'aos/dist/aos.css'

const Navbar= () => {
  const [showMenu, setShowMenu] = useState(false) 
  
  const menuControl = () => setShowMenu(!showMenu)
 
  const navBar = () => (
      <ul data-aos='slide-right' className={styles['navbar']}>
          <li><CloseIcon onClick={ menuControl}/> </li>
          <li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
          <li><Link  to="About" spy={true} smooth={true}>About</Link></li>
          <li><Link  to="Projects" spy={true} smooth={true}>Projects</Link></li>
          <li><Link  to="Contact" spy={true} smooth={true}>Contact</Link></li>
      </ul>
  )

  const menu = () => <MenuIcon data-aos='fade' className={styles['menu']} onClick={ menuControl}/>
  
  return <>  { showMenu ? navBar() : menu()} </>
}

export default Navbar;