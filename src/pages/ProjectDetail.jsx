import { useParams, useNavigate } from "react-router-dom";
import projectsData from "../data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <section className="projectdetail">
        <h2>Project niet gevonden</h2>
        <button onClick={() => navigate("/projects")}>Terug naar projecten</button>
      </section>
    );
  }

  // Extra uitleg per project
  const projectExtra = () => {
    switch (project.id) {
      case 1:
        return (
          <>
            <p>
              Voor dit project moest ik mijn eigen digitale escape room ontwerpen met een zelfgekozen thema. 
              Dit was de eerste keer dat ik echt met PHP en databases werkte. 
              Ik leerde hoe ik informatie kon opslaan, ophalen en gebruiken om het spel interactief te maken.
            </p>
            <p>
              <strong>Wat ik heb geleerd:</strong> werken met PHP, databases, logische puzzels ontwerpen en testen.
            </p>
          </>
        );
      case 2:
        return (
          <>
            <p>
              Dit was mijn eerste echte zelfgemaakte website. Naast informatie over Sierra Leone moest ik ook een kleine memory-game toevoegen. 
              Tijdens dit project leerde ik veel over JavaScript en CSS.
            </p>
            <p>
              <strong>Wat ik heb geleerd:</strong> interactieve elementen met JavaScript bouwen, CSS styling, zelfstandig een complete website maken.
            </p>
          </>
        );
      case 3:
        return (
          <>
            <p>
              Bij dit project kregen we een bestaande website die nog niet werkte. 
              De opdracht was om alle functionaliteit zelf werkend te maken met PHP en SQL.
            </p>
            <p>
              <strong>Wat ik heb geleerd:</strong> SQL-queries, PHP voor formulieren en login, analyseren en verbeteren van een bestaande website.
            </p>
          </>
        );
      default:
        return <p>Geen extra informatie beschikbaar.</p>;
    }
  };

  return (
    <section className="projectdetail">
      <button onClick={() => navigate("/projects")}>Terug naar projecten</button>

      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} className="detail-image" />

      <p>{project.description}</p>

      {projectExtra()}
    </section>
  );
};

export default ProjectDetail;
