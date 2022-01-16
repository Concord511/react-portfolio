import React from 'react';
import projects from '../../assets/projects/projects';
import './Portfolio.css';

function Portfolio() {
    return (
        <section>
            <div className="portfolio__container">
                <h2>My Work:</h2>
                <div className="portfolio__projectsWrapper">
                    {projects.map(project => (
                        <div className="portfolio__appContainer" key={project.name}>
                            <a href={project.projectUrl} target="_blank" rel="noreferrer">
                            <img src={require('../../assets/projects/images/' + project.image)} className="portfolio__projectImage" alt={project.name} />
                            </a>
                            <div className="portfolio__appLinks">
                                <a className="portfolio__appTitle" href={project.projectUrl} target="_blank" rel="noreferrer">
                                    {project.name}
                                    <span className="portfolio__appSubtitle">{project.technologies}</span>
                                </a>
                                <a className="portfolio__gitLink" href={project.githubUrl} target="_blank" rel="noreferrer" >GitHub Repository</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio;