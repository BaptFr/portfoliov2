import { useRef } from 'react';
import styles from './Projectspage.module.scss';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import Projects from '../../components/Projects';


function Projectspage () {
     const topSectionRef = useRef(null);
     const scrollToSection = () => {
        topSectionRef.current.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div className= {`${styles.projectsContainer} d-flex flex-fill flex-column`}>
            <ScrollToTopButton  targetRef={topSectionRef}/>
            <section className={`${styles.projectsIntroContainer} d-flex flex-column justify-content-sb align-items-center m-100 mb-20 text-center`}>
                <h1 className='relative gradient-title-purple-center'> MES PROJETS</h1>
                <article className='relative'>
                    <p>Vous trouverez ici une sélection de mes réalisations ou projets en cours.<br />
                    Découvrez différents projets de développement Front-End, Back-End, Full-Stack mais aussi de Debug & Optimisation SEO.<br />
                    <br />
                    Ce portfolio est lui-même développé avec React pour une interface utilisateur dynamique et un code modulaire.<br />
                    Stylisé en SCSS pour une gestion des styles efficace et un design responsive.
                    </p>
                </article>
                <div className='arrowsContainer' onClick={scrollToSection}>
                    <div className="arrow2 arrowSliding delay1"></div>
                    <div className="arrow2 arrowSliding delay2"></div>
                    <div className="arrow2 arrowSliding delay3"></div>
                </div>
            </section>
             {/* Scroll ref for media queries */}
            <div ref={topSectionRef}>
            </div>
            <section className='mt-100 pt-75'>
                <Projects />
            </section>
        </div>
    )
};
export default Projectspage;