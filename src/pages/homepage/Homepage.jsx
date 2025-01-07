import styles from './Homepage.module.scss';
import portrait from '../../assets/images/portrait.png'
import LogoBanner from '../../components/LogoBanner';


function Homepage () {
    return (
        <div className= 'd-flex flex-fill flex-column p-40 front-content '>
            <section className='section d-flex flex-row justify-content-center gap-500'>
                <article className='article border-style'>
                    <p className='title'> Bienvenue sur mon portfolio ! </p>
                    <p>Après une ancienne vie dans le commerce, j'ai effectué une reconversion
                    professionnelle pour me plonger dans le développement web. <br/>
                    Explorez ici une sélection de projets qui témoignent de mon parcours,
                    de ma formation et de mes compétences.
                    </p>
                </article>
                <img src={portrait}></img>
            </section>

            <div className='mt-20'>
                TECHNOLOGIS & STACK
                <LogoBanner />
            </div>
            <div className='mt-20 section'>
            FORMATIONS
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
            </div>

            <div className='mt-20 section'>
                LIENS
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
            </div>

        </div>
    )
};
export default Homepage;