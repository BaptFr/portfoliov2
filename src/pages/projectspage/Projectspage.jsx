import styles from './Projectspage.module.scss';
import Projects from '../../components/Projects';

import GitHubLogo from '../../assets/logos/github-logo.webp';


function Projectspage () {

    return (
        <div className= {`${styles.projectsContainer} d-flex flex-fill flex-column`}>
            <section className={`${styles.projectsIntroContainer} d-flex flex-column justify-content-sb align-items-center m-20 text-center`}>
                <h2 className='relative text-shadow-outline'> MES PROJETS</h2>
                <article className='relative'>
                    <p>Vous trouverez ici une sélection de mes réalisations ou projets en cours.<br />
                    Découvrez différents projets de développement Front-End, Back-End, Full-Stack mais aussi de Debug & Optimisation SEO.<br />
                    <br />
                    Ce portfolio lui-même est développé avec React pour une interface utilisateur dynamique et un code modulaire.<br />
                    Stylisé en SCSS pour une gestion des styles efficace et un design responsive pour adapter l&apos; 'interface et l'expérience utilisateur à tout les supports.
                    </p>
                </article>
            </section>
            <section>
                <Projects />
            </section>
            <div className='d-flex all-center p-10'>
                <a
                    href='https://github.com/BaptFr'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='.logoLink'>
                    <img src={GitHubLogo} alt='Github-repository'></img>
                </a>
            </div>
        </div>
    )
};
export default Projectspage;