import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2023 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">QA Engineer at Autofleet</h3>
            <h4 className="vertical-timeline-element-subtitle">Tel Aviv</h4>
            <p>Designed and executed manual test suites for core infrastructure updates, collaborating closely with data scientists and full-stack engineers to ensure reliability across the stack. Built personal automation tools to streamline workflows, while gaining hands-on experience with product team processes and strengthening my expertise in manual and exploratory testing.            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full-stack Engineer at MDCalc</h3>
            <h4 className="vertical-timeline-element-subtitle">New York</h4>
            <p>
            Led the migration of the company site to Next.js, implementing server-side rendering and performance optimizations that boosted average page load speed by 30% and improved SEO rankings.            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full-stack Engineer Intern at Lagoon</h3>
            <h4 className="vertical-timeline-element-subtitle">Tel Aviv</h4>
            <p>
            Designed and implemented React + D3.js dashboards for a financial analysis platform, transforming complex historical datasets into clear, actionable visualizations.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;