import styles from './ProjectCard.module.scss'
import ProjectDialogue from './ProjectDialogue'

const ProjectCard = ({image}) => {

  return (
    <div style={{backgroundImage:`url${image}`}} className={styles['card-wrapper']}>
      <div className={styles['description-wrapper']}>
        <ProjectDialogue/> 
      </div>
    </div>
    );
}

export default ProjectCard