import styles from './Homepage.module.scss';
import introImage from '../../assets/images/intro-image.webp';
import LogoBanner from '../../components/LogoBanner';
import LogoBannerDyn from '../../components/LogoBannerDyn';
import techsData from '../../data/stack.json';


function Homepage () {
    return (
        <div className= 'd-flex flex-fill flex-column p-40 front-content '>
            <section className='section d-flex flex-row justify-content-sa align-items-center wrap'>
                <article className='article border-style'>
                    <p className='title'> Bienvenue sur mon portfolio ! </p>
                    <p>Après une ancienne vie dans le commerce, j'ai effectué une reconversion
                    professionnelle pour me plonger dans le développement web. <br/>
                    Explorez ici une sélection de projets qui témoignent de mon parcours,
                    de ma formation et de mes compétences.
                    </p>
                </article>
                <img src={introImage} alt='intro-portrait' className={styles.introImage} />
            </section>

            <section className='mt-20 section '>
                <h2 className='title text-center'> STACK TECHNIQUE</h2>

                {/* TECH CONTAINER */}
                <div className='d-flex flex-row justify-content-sb'>
                    {/* Front-end container */}
                    <div className={`${styles.feContainer} d-flex flex-column`}>
                        <h3 className='text-center'>Front-end</h3>

                        <div className='d-flex flex-row justify-content-sb'>
                            <div className={styles.techList}>
                                <ul className='tech-names-list'>
                                    {techsData.map((tech) => (
                                        <li key={tech.id}>
                                            {tech.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <LogoBannerDyn jsonFile='./src/data/stack.json' />
                            </div>
                        </div>
                    </div>

                    {/* Back container */}
                    <div className={`${styles.feContainer} d-flex flex-column`}>
                        <h3 className='text-center'>Front-end</h3>
                        <div className='d-flex flex-row justify-content-sb'>
                            <div className={styles.techList}>
                                <ul className='tech-names-list'>
                                    {techsData.map((tech) => (
                                        <li key={tech.id}>
                                            {tech.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <LogoBannerDyn jsonFile='./src/data/stack.json' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className='mt-20 section'>
            FORMATIONS
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
            </section>

            <div className='mt-20 section'>
                LIENS
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
            </div>

        </div>
    )
};
export default Homepage;