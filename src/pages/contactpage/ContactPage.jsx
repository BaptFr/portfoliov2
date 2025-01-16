import styles from './ContactPage.module.scss';
import ContactImage from '../../assets/images/contact-image.webp';
import ContactForm from '../../components/ContactForm.jsx';
function ContactPage () {

    return (
        <div className ='d-flex flex-column justify-content-sb p-20'>
              <h1> ME CONTACTER </h1>
            <img src={ContactImage} alt='contact-illustration' className='pageImage' />
            <section className={`${styles.contactContainer} b2 section d-flex flex-row justify-content-sb align-items-center wrap`}>
                <article className='article border-style'>
                    <p>Vous souhaitez échanger à propos d'un projet ou une autre demande ? < br/>
                        N'hésitez surtout pas à me contacter soit par mes réseaux, soit directement en remplissant
                        le formulaire et je vous répondrai dans les plus brefs délais !
                    </p>
                </article>
            <div>
                <ContactForm />
            </div>
            </section>
        </div>
    )
};

export default ContactPage;