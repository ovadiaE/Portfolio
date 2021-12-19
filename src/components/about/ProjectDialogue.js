import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import styles from './ProjectDialogue.module.scss'
import { descriptions } from '../../project-descriptions/project-descriptions'

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles['dialogue-wrapper']}>
      <Button className={styles['dialogue-button']} variant="outlined" onClick={handleClickOpen}>
        Learn More
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xl"
      >
        <DialogContent>
         <div className={styles['project-description-wrapper']}>
           Weight in Gold is an interactive art installation on display as part of Atelier Benito's Joy of Life Exhibit. 
           It provides the user with the value of their weight in gold calculated in real time.
           <br></br>
           <a href='https://www.instagram.com/p/CW9HxhAAoS6/'>Weight in Gold</a>
         </div>
        </DialogContent>
        <DialogActions>
          <Button className={styles['button']} onClick={handleClose}>close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}