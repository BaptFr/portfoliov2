import styles from './Projectspage.module.scss';
import Projects from '../../components/Projects';

function Projectspage () {

    return (
        <section className= {`${styles.projectsContainer} d-flex flex-column`}>
         <div>
            <Projects />
            
         </div>
        </section>
    )
};
export default Projectspage;