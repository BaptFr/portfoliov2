import styles from './ContactPage.module.scss';
import ContactImage from '../../assets/images/bckg.png';
import ContactForm from '../../components/ContactForm.jsx';
function ContactPage () {

    return (
        <div className='d-flex flex-column all-center gap-50'>
            <h2 className='relative mt-30 gradient-title-blue'> ME CONTACTER </h2>
            <img src={ContactImage} alt='contact-logo m-auto relative ' className='' />
            <section className={`${styles.contactContainer} section  br-10 d-flex flex-column justify-content-sb align-items-center  wrap`}>
              <div className= 'd-flex flex-row all-center gap-100'>
                <article className='article'>
                    <p>Vous souhaitez échanger à propos d&apos;un projet ou une autre demande ? < br/>
                        N&apos;hésitez surtout pas à me contacter soit par mes réseaux, soit directement en remplissant
                        le formulaire et je vous répondrai dans les plus brefs délais !
                    </p>
                </article>
                <div>
                    <ContactForm />
                </div>
            </div>
            </section>
        </div>
    )
};

export default ContactPage;