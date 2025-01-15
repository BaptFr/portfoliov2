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
                    <p>Après une ancienne vie dans le commerce, j&apos; ai effectué une reconversion
                    professionnelle pour me plonger dans le développement web. <br/>
                    Explorez ici une sélection de projets qui témoignent de mon parcours,
                    de ma formation et de mes compétences.
                    </p>
                </article>
                <img src={introImage} alt='intro-portrait' className='pageImage' />
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
            <div className={`${styles.softSkillsContainer} p-30 `}>
                    <ul className='d-flex flex-row justify-content-sa wrap gap-10'>
                        <li>ESPRIT D&apos; EQUIPE</li>
                        <li>AUTONOMIE</li>
                        <li>ADAPTABILITE</li>
                        <li>CURIOSITE</li>
                        <li>PERSEVERANCE</li>
                    </ul>
                </div>
            </section>



            <h2 id={styles.formationTitle}>FORMATION</h2>
            <section className={styles.formationSection}>
                <div className={styles.timeline}>
                    <div className={styles.timelineEmptyRight}>
                        <p>Décembre 2023</p>
                    </div>
                    <div className={styles.timelineMiddle}>
                        <div className={styles.timelineCircle}></div>
                    </div>
                    <div className={`${styles.timelineComponent} ${styles.timelineContent} ${styles.timelineContentL}`}>
                        <h4>Meta Front-End Developer- Professional Certificate</h4>
                        <p>Meta 9 courses program</p>
                    </div>
                    <div className={`${styles.timelineComponent} ${styles.timelineContent} ${styles.timelineContentR}`}>
                            <h4>Certification Professionnelle de Développeur web</h4>
                            <p>Open Classrooms</p>
                    </div>
                    <div className={styles.timelineMiddle}>
                        <div className={styles.timelineCircle}></div>
                    </div>
                    <div className={styles.timelineEmpty}>
                    <p>Juillet 2023</p>
                    </div>
                    <div className={styles.timelineEmptyRight}>
                    <p>2015</p>
                    </div>
                    <div className={styles.timelineMiddle}>
                        <div className={styles.timelineCircle}></div>
                    </div>
                    <div className={`${styles.timelineComponent} ${styles.timelineContent} ${styles.timelineContentL}}`}>
                        <h4>Titre Professionnnel de Manager < br/>  d&apos; Univers Marchand</h4>
                        <p>RNCP - Niveau 5 (BAC +2)</p>
                    </div>
                    <div className={`${styles.timelineComponent} ${styles.timelineContent} ${styles.timelineContentR}`}>
                            <h4>Ecole Nationale des Sous-Officers d&apos; Active</h4>
                            <p>Armée de Terre</p>
                    </div>
                    <div className={styles.timelineMiddle}>
                        <div className={styles.timelineCircle}></div>
                    </div>
                    <div className={styles.timelineEmpty}>
                    <p>2009</p>
                    </div>
                    <div className={styles.timelineEmptyRight}>
                    <p>2007</p>
                    </div>
                    <div className={styles.timelineMiddle}>
                        <div className={styles.timelineCircle}></div>
                    </div>
                    <div className={`${styles.timelineComponent} ${styles.timelineContent} ${styles.timelineContentL}`}>
                        <h4>Baccalauréat </h4>
                        <p>Série Scientifique</p>
                    </div>
                </div>
            </section>
        </div>
    )
};
export default Homepage;