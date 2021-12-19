import styles from './ProjectCard.module.scss'
import ProjectDialogue from './ProjectDialogue'

const ProjectCard = ({image}) => {

  return (
    <div style={{backgroundImage:`url${image}`}} className={styles['card-wrapper']}>
      <div className={styles['description-wrapper']}>
        <div className={styles['title']}>
          Weight In Gold
        </div>
        <ProjectDialogue/> 
      </div>
    </div>
    );
}

export default ProjectCard