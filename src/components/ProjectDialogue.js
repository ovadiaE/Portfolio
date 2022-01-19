import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import styles from './ProjectDialogue.module.scss'

export default function ProjectDialog({projectName, projectDescription, projectLink, frontend, backend}) {
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
      {projectName}
    </Button>
  )

  const dialogueContent = () => (
    <DialogContent>
         <div className={styles['project-description-wrapper']}>
          {projectDescription}
            <br></br>
            <a href={projectLink}>{projectName}</a>
            <br></br>
            <a href={frontend}>Frontend</a>
            <br></br>
            { backend ? <a href={backend}>Backend</a> : null}
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