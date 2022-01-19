import styles from './ProjectCard.module.scss'
import ProjectDialogue from './ProjectDialogue'

const ProjectCard = ({image, projectName, projectDescription, projectLink,frontend, backend}) => {

  return (
    <div style={{backgroundImage:`url${image}`}} className={styles['card-wrapper']}>
      <div className={styles['description-wrapper']}>
        <ProjectDialogue projectName={projectName} 
        projectDescription={projectDescription} 
        projectLink={projectLink}
        frontend={frontend}
        backend={backend}/> 
      </div>
    </div>
    );
}

export default ProjectCard