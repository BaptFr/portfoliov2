import styles from './Projectspage.module.scss';
import Projects from '../../components/Projects';

function Projectspage () {

    return (
        <section className= {`${styles.projectsContainer} d-flex flex-column`}>
         <div className='d-flex flex-column all-center m-20 text-center'>
            <img></img>
            <p> Ici, vous trouverez une sélection de mes réalisations ou projet en cours.<br />
                Découvrez différents projets du front-end au full-stack mais aussi de debug & optimisation SEO.<br />
                Ce portfolio lui-même est développé avec React pour une interface utilisateur dynamique et un code modulaire.<br />
                Stylisé en SCSS pour une gestion des styles efficace et un design responsive pour adapter l'interface et l'expérience utilisateur à tout les supports. </p>
            <a><i></i>Lien github</a>
         </div>
         <div>
            <Projects />
         </div>
        </section>
    )
};
export default Projectspage;