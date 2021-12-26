import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import styles from './ProjectDialogue.module.scss'

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {setOpen(true)}

  const handleClose = () => {setOpen(false)}

  const closeDialogue = () => (
    <DialogActions>
      <Button className={styles['button']} onClick={handleClose}>close</Button>
    </DialogActions>
  )

  const openDialogue = () => (
    <Button className={styles['dialogue-button']} variant="outlined" onClick={handleClickOpen}>
      Weight In Gold
    </Button>
  )

  const dialogueContent = () => (
    <DialogContent>
         <div className={styles['project-description-wrapper']}>
            Weight in Gold is an interactive art installation on display as part of Atelier Benito's Joy of Life Exhibit. 
            It provides the user with the value of their weight in gold calculated in real time.
            <br></br>
            <a href='https://www.instagram.com/p/CW9HxhAAoS6/'>Weight in Gold</a>
            <br></br>
            <a href='https://github.com/ovadiaE/weight-in-gold-frontend'>Frontend</a>
            <br></br>
            <a href='https://github.com/ovadiaE/Weight-In-Gold'>Backend</a>
          </div>
    </DialogContent>
  )





  return (
    <div className={styles['dialogue-wrapper']}>
      {openDialogue()}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xl">
        {dialogueContent()}
        {closeDialogue()}
      </Dialog>
    </div>
  );
}