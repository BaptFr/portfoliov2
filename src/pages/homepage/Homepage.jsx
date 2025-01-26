import styles from './Homepage.module.scss';
import introImage from '../../assets/images/intro-image.webp';
import StackSection from '../../components/StackSection';
import SkillsSection from '../../components/SkillsSection';
import EducationLogo from '../../assets/logos/education-logo.webp';
import WorkLogo from '../../assets/logos/work-logo.webp';


function Homepage () {

    return (
        <div className=' d-flex flex-fill flex-column'>
            <section className={`${styles.introSection} section d-flex flex-row justify-content-sb align-items-center wrap`}>
                <article className='article'>
                    <h1> BIENVENUE SUR MON PORTFOLIO ! </h1>
                    <p>Explorez ici mon parcours et une sélection de projets qui témoignent
                    de ma formation et de mes compétences.
                    </p>
                </article>
                <img src={introImage} alt='intro-portrait' className='pageImage' />
            </section>

            {/* SECTION STACK  section (code more robust) */}
            <section className='section '>
                <h2 className='gradient-title-purple'> STACK TECHNIQUE</h2>
                <StackSection />
            </section>


            {/* COMPETENCES section */}
            <section className='section'>
            <h2 className='gradient-title-blue'>METHODES <br /> & <br />COMPETENCES</h2>
                <SkillsSection />
            </section >

            {/* SOFTSKILLS section*/}
            <section className='section'>
            <h2 className='gradient-title-orange'>SOFT SKILLS</h2>
            <div className={`${styles.softSkillsContainer} p-30`}>
                    <ul className='d-flex flex-row justify-content-sa wrap gap-20'>
                        <li>ESPRIT D&apos; EQUIPE</li>
                        <li>AUTONOMIE</li>
                        <li>ADAPTABILITE</li>
                        <li>CURIOSITE</li>
                        <li>PERSEVERANCE</li>
                    </ul>
                </div>
            </section>



            <h2 className='gradient-title-orange mb-5'>FORMATION <br /> & <br />EXPERIENCE PROFESSIONNELLE</h2>
            <section className={`${styles.formationSection} d-flex flex-column all-center gap-100`}>
                <div className={`${styles.formationLogosLegend} d-flex flex-row  gap-400 `}>
                    <img className='orange-model' src={EducationLogo} alt='education-logo'/>
                    <img className='purple-model' src={WorkLogo} alt='work-logo'/>
                </div>
                <div className={`${styles.timeline}`}>
                    <div className={styles.timelineEmptyRight}>
                        <p>Depuis Déc. 2024</p>
                        <p></p>
                    </div>
                    <div className={styles.timelineMiddle}>
                        <div className={styles.timelineCircle}></div>
                    </div> <div className={`${styles.timelineComponent} ${styles.timelineContent} purple-model`}>
                        <h4>Developpeur Front-End React Bénévole</h4>
                        <p>Association Their Memory</p>
                    </div>
                     <div className={`${styles.timelineComponent} ${styles.timelineContent} orange-model`}>
                        <h4>Meta Front-End Developer- Professional Certificate</h4>
                        <p>Meta 9 courses program</p>
                    </div>
                    <div className={styles.timelineMiddle}>
                        <div className={styles.timelineCircle}></div>
                    </div>
                    <div className={styles.timelineEmpty}>
                        <p>Obtention Déc. 2024</p>
                    </div>
                    <div className={`${styles.timelineComponent} ${styles.timelineContent} orange-model`}>
                            <h4>Certification Professionnelle de Développeur web</h4>
                            <p>Open ClassRooms</p>
                    </div>
                    <div className={styles.timelineMiddle}>
                        <div className={styles.timelineCircle}></div>
                    </div>
                    <div className={styles.timelineEmpty}>
                    <p>Obtention Juil. 2024</p>

                    </div>
                    <div className={styles.timelineEmptyRight}>
                    <p>Sept. 2023</p>
                    <p>Sept. 2015</p>
                    </div>
                    <div className={styles.timelineMiddle}>
                        <div className={styles.timelineCircle}></div>
                    </div>

                    <div className={`${styles.timelineComponent} ${styles.timelineContent} purple-model`}>
                        <h4> Manager métier <br/></h4>
                        <p>Employé < br/> puis cadre commercial < br/> -< br/> Hypermarchés CARREFOUR </p>
                    </div>
                    <div className={`${styles.timelineComponent} ${styles.timelineContent} orange-model`}>
                        <h4>Titre Professionnnel de Manager < br/>  d&apos; Univers Marchand</h4>
                        <p>RNCP - Niveau 5 (BAC +2)</p>
                    </div>
                    <div className={styles.timelineMiddle}>
                        <div className={styles.timelineCircle}></div>
                    </div>
                    <div className={styles.timelineEmpty}>
                    <p></p>
                    <p>2014</p>
                    </div>
                    <div className={styles.timelineEmpty}>
                    </div>
                    <div className={styles.timelineMiddle}>
                        <div className={styles.timelineCircle}></div>
                    </div>
                    <div className={`${styles.timelineComponent} ${styles.timelineContent} purple-model`}>
                        <h4>Militaire </h4>
                        <p>Armée de Terre</p>
                    </div>
                    <div className={`${styles.timelineComponent} ${styles.timelineContent} orange-model`}>
                        <h4>Ecole Nationale des Sous-Officier d&apos; Active </h4>
                        <p>Armée de Terre</p>
                    </div>

                    <div className={styles.timelineMiddle}>
                        <div className={styles.timelineCircle}></div>
                    </div>
                    <div className={styles.timelineEmpty}>
                    </div>
                    <div className={`${styles.timelineComponent} ${styles.timelineContent} orange-model`}>
                        <h4>Baccalauréat </h4>
                        <p>Série Scientifique</p>
                    </div>
                    <div className={styles.timelineMiddle}>
                        <div className={styles.timelineCircle}></div>
                    </div>
                    <div className={styles.timelineEmpty}>
                    <p>2009</p>
                    </div>
            </div>
            </section>
        </div>
    )
};
export default Homepage;
