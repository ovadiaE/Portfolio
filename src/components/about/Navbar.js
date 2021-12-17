import React from 'react';
import {Link} from 'react-scroll'
import styles from './Navbar.module.scss'

const navbar= () =>{
  return (
 
        <ul className={styles['navbar']}>
          <li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
          <li><Link  to="About" spy={true} smooth={true}>About</Link></li>
          <li><Link  to="Projects" spy={true} smooth={true}>Projects</Link></li>
          <li><Link  to="Contact" spy={true} smooth={true}>Contact</Link></li>
        </ul>
 
)
}
export default navbar;