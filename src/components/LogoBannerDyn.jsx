import styles from './LogoBannerDyn.module.scss';
import { useState, useEffect } from 'react';

function LogosBannerDyn({ jsonFile, sectionKey }) {
    const [logos, setLogos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(jsonFile)
        .then((response) => {
          // Vérifier JSON
          if (!response.ok) {
            throw new Error('Échec de la récupération du fichier JSON');
          }
          return response.json();
        })
        .then((data) => {
          // Vérif tableau
          if (sectionKey && data[sectionKey]) {
            setLogos(data[sectionKey]);
          } else if (Array.isArray(data)) {
            setLogos(data);
          } else {
            throw new Error('Les données ne sont pas au format attendu');
          }
          setLoading(false); // fin du chrgment
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }, [jsonFile, sectionKey]);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error.message}</p>;

    return (
        <div className={styles.banner}>
            <div className={styles.slide}>
                {logos.map((logo) => (
                    <img key={logo.id} src={logo.image} alt={`logo ${logo.name}`} loading="lazy" />
                ))}
                {logos.map((logo) => (
                    <img key={logo.id} src={logo.image} alt={`logo ${logo.name}`} loading="lazy" />
                ))}
                </div>
        </div>
        );
    }

export default LogosBannerDyn;


