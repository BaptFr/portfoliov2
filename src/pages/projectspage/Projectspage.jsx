import { useRef } from 'react';
import styles from './Projectspage.module.scss';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import Projects from '../../components/Projects';

import GitHubLogo from '../../assets/logos/github-logo.webp';


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
                    Ce portfolio lui-même est développé avec React pour une interface utilisateur dynamique et un code modulaire.<br />
                    Stylisé en SCSS pour une gestion des styles efficace et un design responsive pour adapter l&apos;interface et l&apos; expérience utilisateur à tout les supports.
                    </p>
                </article>
                <div className='arrowsContainer' onClick={scrollToSection}>
                    <div className="arrow arrowSliding delay1"></div>
                    <div className="arrow arrowSliding delay2"></div>
                    <div className="arrow arrowSliding delay3"></div>
                </div>
            </section>
            <section ref={topSectionRef} className='mt-100 pt-75'>
                <Projects />
            </section>
            <div className='d-flex all-center p-10'>
                <a
                    href='https://github.com/BaptFr'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='.logo-link'>
                    <img src={GitHubLogo} alt='Github-repository'></img>
                </a>
            </div>
        </div>
    )
};
export default Projectspage;