import styles from './Projectspage.module.scss';
import Projects from '../../components/Projects';
import PortfolioImage from  '../../assets/images/portfolio-image.webp';
import GitHubLogo from '../../assets/logos/github-logo.webp';

function Projectspage () {

    return (
        <div className= {`${styles.projectsContainer} d-flex flex-column`}>
            <section className={`${styles.projectsIntroContainer} d-flex flex-row justify-content-sb m-20 text-center`}>
                <aticle>
                    <p>Ici, vous trouverez une sélection de mes réalisations ou projet en cours.<br />
                    Découvrez différents projets du front-end au full-stack mais aussi de debug & optimisation SEO.<br />
                    Ce portfolio lui-même est développé avec React pour une interface utilisateur dynamique et un code modulaire.<br />
                    Stylisé en SCSS pour une gestion des styles efficace et un design responsive pour adapter l&apos; 'interface et l'expérience utilisateur à tout les supports. 
                    </p>
                </aticle>
                <img src={PortfolioImage} className='pageImage'></img>
            </section>
            <div className='b4 d-flex all-center'>
                <a
                    href='https://github.com/BaptFr'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='.logoLink'>
                <img src={GitHubLogo} alt='Github-repository'></img>
                </a>
            </div>
            <section>
                <Projects />
            </section>
        </div>
    )
};
export default Projectspage;