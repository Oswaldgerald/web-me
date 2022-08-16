import React from 'react'
import './Projects.css'
import { projectsData } from '../../data/projectsData'
import  RightArrow from '../../assets/rightArrow.png'

const Projects = () => {
  return (
    <div className="Projects" id="projects">
        {/* header */}
        <div className="projects-header">
            <span className='stroke-text'>Exlplore Some</span>
            <span>Projects</span>
            <span className='stroke-text'>learn More</span>
        </div>
        <div className="project-categories">
                {projectsData.map((project)=>(
                    <div className="category">
                        {project.image}
                        <span>{project.heading}</span>
                        <span>{project.details}</span>
                        <div className="open-now">
                            <span>Open Now</span>
                            <img src={RightArrow} alt=""/>
                        </div>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Projects
