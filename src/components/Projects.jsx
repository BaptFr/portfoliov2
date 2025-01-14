import { useEffect, useState } from 'react';
import styles from './Projects.module.scss';

const Projects = () => {
  const [projectsData, setProjectsData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

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
        <div
          className={`${styles.ProjectsContainer} d-flex flex-row justify-content-center align-items-center wrap gap-50 b1`}
        >
          {projectsData.map(({ id, title, image, }) => (
            <div
              key={id}
              className={`${styles.projectCard} bigCardContainer b2`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: 'center left',
              }}
              onClick={() => setSelectedCard(id)} // Carte selectionnée
            >

            <div className={`${styles.cardOverlay}`}></div>
            <h3 className={`${styles.cardTitle}`}>{title}</h3>
            </div>
          ))}

          {/* overlay*/}
          {selectedCard !== null && (
        <div className={styles.modal} onClick={() => setSelectedCard(null)}>
          <div className={styles.modalContent}>
            {projectsData
              .filter((project) => project.id === selectedCard)
              .map(({ title, text, links, imagemodal  }) => (
                <div key={selectedCard}
                style={{
                    backgroundImage: `url(${imagemodal})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: 'center left',
                  }}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  {links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.type}
                    </a>
                  ))}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

