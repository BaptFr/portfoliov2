import styles from './Content.module.scss';
import LogoBanner from './LogoBanner';


function Content () {
    return (
        <div className= 'd-flex flex-fill flex-column front-content p-40'>
            <section className='section text-center'>
                <p> Bienvenue sur mon portfolio ! <br/><br/>
                Après une ancienne vie dans le commerce, j'ai effectué une reconversion
                professionnelle pour me plonger dans le développement web. <br/><br/>
                Explorez ici une sélection de projets qui témoignent de mon parcours,
                de ma formation et de mes compétences.
                </p>
            </section>

            <div className='mt-20'>
                TECHNOLOGIS & STACK
                <LogoBanner />
            </div>
            <div className='mt-20'>
            FORMATIONS
            </div>

            <div className='mt-20'>
                LIENS
            </div>

        </div>
    )
};
export default Content;