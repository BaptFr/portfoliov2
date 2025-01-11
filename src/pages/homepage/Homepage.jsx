import styles from './Homepage.module.scss';
import introImage from '../../assets/images/intro-image.webp';
import SmallCard from '../../components/SmallCard';
import TechSection from '../../components/Stack';


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
                <h2> COMPETENCES TRANSVERSALES </h2>
                <div className='card-container'>
                    <SmallCard
                        jsonFile='./src/data/skills.json'
                        sectionKey='competences'
                        competence='seo'
                    />
                </div>

            </section >
            <section className='section'>
                <h2> SOFT SKILLS</h2>
            </section>



            <section className='section'>
            FORMATIONS
            </section>

            <div className='mt-20 section'>
                LIENS
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
            </div>

        </div>
    )
};
export default Homepage;