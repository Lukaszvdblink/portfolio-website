

import { useNavigate } from "react-router-dom";

const ProjectCard = ({ id, title, description, image, technologies }) => {
    const navigate = useNavigate();

    return (  
        <section className="projectcard">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>

            <ul>
                {technologies && technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>

            <button onClick={() => navigate(`/projects/${id}`)}>
                Naar project
            </button>
        </section>
    );
}
 
export default ProjectCard;
