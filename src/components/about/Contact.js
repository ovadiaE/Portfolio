import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import styles from './contact.module.scss'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import Button from '@mui/material/Button'
import 'aos/dist/aos.css'

 const Contact = () => {
  const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_2u7cuvk', 'template_qozeqzz', e.target, 'user_PZ9sirgxmLjoabMnSFmuJ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

   

  return (
    <div id='Contact' data-aos='slide-up'  className={styles['contact-wrapper']}>
        <div>Contact</div>
        <span className={styles['underline']}></span>
       
        <div className={styles['links']}>
         <LinkedInIcon style={{fontSize:30}} onClick={ e => window.location.href='https://www.linkedin.com/in/ovadia-esquenazi-650153211/' }/> 
         <GitHubIcon style={{fontSize:30}} onClick={ e => window.location.href='https://github.com/ovadiaE'  }/>
        </div>
       
            <form className={styles['form']} ref={form} onSubmit={sendEmail}>
                <label></label>
                <input placeholder="Name" type="text" name="user_name" />
                <label></label>
                <input placeholder="Email" type="email" name="user_email" />
                <label></label>
                <textarea placeholder="Message" name="message" />
                <Button type="submit"variant="outlined" value="Send">Send</Button>
            </form>
      
    </div>
  );
};

export default Contact