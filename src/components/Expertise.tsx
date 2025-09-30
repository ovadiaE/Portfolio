import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faJira } from '@fortawesome/free-brands-svg-icons';
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
    "EC2", 
    "IaC",
    "microservices",
    "GCP",
    "Linux",
    "Kubernetes",
];

const labelsThird = [
    "Dalle", 
    "agents", 
    "Github co-pilot"
];

const labelsFourth = [
    "project management",
    "Regression testing",
    "Black Box testing",
    "load testing", 
    "latency testing",
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
                        I build web applications using modern frameworks and libraries, 
                        notably Next.js, Node, and TypeScript. I bring full-stack skills, a high level 
                        understanding of the SDLC process and a specialization in software testing.
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
                    <h3>DevOps & Automation</h3>
                    <p>
                       I love platform infastructure. From analyzing network traffic for root cause analysis to 
                        managing deployments, updating deployment pipelines and working with containerization tools, 
                        I'm obsessed with all things DevOps.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>
                        Always researching new tools to help me become the best engineer I can be, 
                        staying relevant and up to date with the cutting edge, speeding up workflows while maintaining high standards.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faJira} size="3x"/>
                    <h3>QA and Product</h3>
                    <p>
                        Quality over everything. 
                        Shipping working products is the name of the game and I 
                        have a proven track record of managing testing processes for enterprise level software.
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