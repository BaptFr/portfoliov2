import { useEffect, useState } from "react";
import styles from './ScrollToTopButton.module.scss';


function ScrollToTopButton ({ targetRef })  {

     const [showButton, SetShowButton] = useState(false);

    useEffect ( () => {
        const handleScroll = () => {
            if(window.scroll > 50) {
            SetShowButton(true)
        } else {
            SetShowButton(false)
        }
    };
    window.addEventListener('scroll', handleScroll);
    return ()=> window.removeEventListener('scroll', handleScroll);
    }, [])

    const scrollToTop = ()=> {
        targetRef.current?.scrollIntoView ({ behavior: 'smooth'});
    };


    return (
        showButton && (
        <button onClick={scrollToTop} className={styles.backToTopButton}>
            ⬆ Remonter
        </button>
        )
    );
};



export default ScrollToTopButton;