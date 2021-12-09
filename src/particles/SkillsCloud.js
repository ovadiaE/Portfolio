import { TagCloud } from 'react-tagcloud'
import './SkillsCloud.css'

const data = [
    { value: 'JavaScript', count: 38 },
    { value: 'React', count: 30 },
    { value: 'Nodejs', count: 28 },
    { value: 'Express.js', count: 25 },
    { value: 'HTML5', count: 33 },
    { value: 'CSS3', count: 20 },
    { value: 'Webpack', count: 22 },
    { value: 'Babel.js', count: 7 },
    { value: 'MYSQL', count: 25 },
    { value: 'Material UI', count: 17 },
    { value: 'Bootstrap', count: 15 },
    { value: 'React Native', count: 27 },
    { value: 'GitHub', count: 15 },
    { value: 'NPM', count: 11 },
  ]


  const SkillsCloud = () => {

    const customRenderer = (tag, size, color) =>  {
        return (
            <span
           
            key={tag.value}
            style={{
              animation: 'blinker 5s linear infinite',
              animationDelay: `${Math.random() * 2}s`,
              fontSize: `${size / 2}em`,
              border: `2px solid ${color}`,
              margin: '3px',
              padding: '3px',
              display: 'inline-block',
              color: 'white',
            }}
          >
            {tag.value}
          </span>
        )
    }
      
    return(
        <TagCloud tags={data} minSize={1} maxSize={5} renderer={customRenderer} />

      )
  }

  export default SkillsCloud


