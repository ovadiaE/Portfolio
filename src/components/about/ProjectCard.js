import styles from './ProjectCard.module.scss'

const ProjectCard = ({photo}) => {

  return (
    <div styles={{backgroundImage:`url${photo}`}} className={styles['card-wrapper']}>
      <div></div>
    </div>
    );
}

export default ProjectCard