import { useEffect, useState } from 'react';
import LogoBannerDyn from './LogoBannerDyn';
import styles from './Stack.module.scss';


const sections = [
    { title: 'Front-end', key: 'frontend' },
    { title: 'Back-end', key: 'backend', dataKey: 'backend' },
    { title: (
        <>Outils de développement <br /> et contrôle de version </>),
        key: 'devtools', dataKey: 'devtools' },
    { title: (
        <>Outils de debug<br /> optimisation & SEO </>),
         key: 'seotools', dataKey: 'seotools' },
    { title: (
        <>Outils de collaboration <br /> & veille</>),
         key: 'collaborationtools',
         dataKey: 'collaborationtools' },
];

const TechSection = () => {
    const [techsData, setTechsData] = useState(null); // States
    const [error, setError] = useState(null);

    useEffect(() => {
        // Datas recup.
        fetch('./src/data/stack.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erreur lors du chargement des données / Error at datas loading');
                }
                return response.json();
            })
            .then((data) => setTechsData(data))
            .catch((err) => setError(err.message));
    }, []);

    // Error message.
    if (error) {
        return <p> Erreur : {error}</p>;
    };
    if (!techsData) {
        return <p>Chargement des données...</p>;
    };

    return (
        <div className={styles.sectionContainer}>
            {sections.map(({ title, key }) => (
                <div className={styles.techCardContainer} key={key}>
                    <h3>{title}</h3>
                    <div className={styles.techContainer}>
                        <div className='techBanner'>
                            <LogoBannerDyn
                                jsonFile="./src/data/stack.json"
                                sectionKey={key}
                            />
                        </div>
                        <div>
                            <ul>
                                {techsData[key].map((tech) => (
                                    <li className={styles.techList} key={tech.id}>{tech.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TechSection;