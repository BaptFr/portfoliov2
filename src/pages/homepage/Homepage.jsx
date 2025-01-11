import styles from './Homepage.module.scss';
import introImage from '../../assets/images/intro-image.webp';
import TechSection from '../../components/Stack';
import SkillsSection from '../../components/SkillsSection';


function Homepage () {

    return (
        <div className= 'd-flex flex-fill flex-column p-40 front-content '>
            <section className='section d-flex flex-row justify-content-sa align-items-center wrap'>
                <article className='article border-style'>
                    <h1> Bienvenue sur mon portfolio ! </h1>
                    <p>Après une ancienne vie dans le commerce, j'ai effectué une reconversion
                    professionnelle pour me plonger dans le développement web. <br/>
                    Explorez ici une sélection de projets qui témoignent de mon parcours,
                    de ma formation et de mes compétences.
                    </p>
                </article>
                <img src={introImage} alt='intro-portrait' className={styles.introImage} />
            </section>

             TEST test TEST  STACK TECHNIQUE SECTION CONTAINER

            {/* SECTION STACK  section (code more robust) */}
            <section>
                <h2> STACK TECHNIQUE</h2>
                <TechSection />
            </section>


            {/* COMPETENCES section */}
            <section className='section'>
            <h2>METHODES <br /> ET <br />COMPETENCES</h2>
                <SkillsSection />
            </section >

            {/* SOFTSKILLS section*/}
            <section className='section'>
            <h2>SOFT SKILLS</h2>
            <div className={`${styles.softSkillsContainer} p-30`}>
                    <ul className='d-flex flex-row justify-content-sa wrap'>
                        <li>Espirt d'équipe</li>
                        <li>Autonomie</li>
                        <li>Adaptabilité</li>
                        <li>Curiosité</li>
                        <li>Persévérance</li>
                    </ul>
                </div>
            </section>



            <section className='section'>
                <h2>FORMATION</h2>
            </section>
        </div>
    )
};
export default Homepage;