// src/pages/Projects.jsx

import projectsData from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";

const Projects = () => {
    const [projectsList, setProjectsList] = useState(projectsData);

    return ( 
        <section className="projectscontainer">
            {projectsList.map((project)  => (
                <ProjectCard 
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    technologies={project.technologies}
                />
            ))}
        </section>
    );
}
 
export default Projects;
