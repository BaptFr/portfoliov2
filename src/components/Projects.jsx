import { useEffect, useState } from 'react';
import styles from './Projects.module.scss';

const Projects = () => {
  const [projectsData, setProjectsData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {

    fetch('./src/data/projects.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des données projects.');
            }
            return response.json();
        })
        .then((data) => setProjectsData(data))
        .catch((error) => setError(error.message));
    }, []);

    if (error) {
    return <p>Error: {error}</p>;
    }
    if (!projectsData) {
    return <p>Chargement des données...</p>;
    }

    return (
        <div className={`${styles.ProjectsContainer} d-flex flex-row justify-content-center align-items-center wrap gap-50 b1`}>

        {projectsData.map(({ id, title, image, text, link, githublink }) => (
            <div key={id} className={`${styles.projectCard} bigCardContainer  b2`}>
            <h3>{title}</h3>
            <img src={image} alt={`Project imae ${title}`} loading="lazy" />
            <p>{text}</p>
            <p>{link}</p>
            <p>{githublink}</p>

            </div>
        ))}
        </div>
    );
};

export default Projects;