import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker,  faJira } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Node",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "IaC",
    "GCP",
    "Linux",
    "Kubernetes",
];

const labelsFourth = [
    "Regression testing",
    "Black Box testing",
    "load testing", 
    "Jest",
    "Jira",
];


function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>
                        I have experience in the full spectrum of web engineering, from developing 
                        responsive front-end interfaces, to efficient back-end services.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Cloud Monitoring</h3>
                    <p> I have experience managing deployments, 
                        monitoring cloud production environments for real time systems, 
                        working with containerization tools and operating in cross functional teams to ensure smooth deployments and product uptime.  
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faJira} size="3x"/>
                    <h3>QA and Automation</h3>
                    <p>
                        Quality is critical. 
                        Shipping working products is the name of the game and I 
                        have a proven track record of managing full testing cycles and finding bugs before users do. 
        
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFourth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;