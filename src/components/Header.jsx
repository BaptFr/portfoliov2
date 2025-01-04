import styles from './Header.module.scss';
import logo from '../assets/images/logo.png';

function Header () {
    return (
        <header className={` ${styles.border} d-flex flex-row flex-fill  justify-content-sb background-blurred p-15   `}>
            <img className='site-logo' src={ logo } alt='logo'></img>
            <nav className='d-flex flex-row'>
                <ul className='d-flex flex-row '>
                    <li className='d-flex flex-column all-center mr-10  hover-effect-classic active-effect'>
                        <i className='fa-solid fa-user icons'></i>
                        <button className='btn text-center'> PRESENTATION</button>
                    </li>
                    <li className='d-flex flex-column all-center mr-10  hover-effect-classic active-effect'>
                    <i className='fa-solid fa-briefcase icons'></i>
                        <button className='btn  text-center'> MES PROJETS</button>
                    </li>
                    <li className='d-flex flex-column all-center mr-10  hover-effect-classic active-effect'>
                    <i className='fa-solid fa-envelope icons'></i>
                    <button className='btn text-center'> ME CONTACTER</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
};
export default Header;