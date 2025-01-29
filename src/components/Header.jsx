import styles from './Header.module.scss';
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

function Header () {
    return (
        <header className={` ${styles.headerContainer} relative d-flex align-items-center p-15 z-index4 `}>
            <div className='overlay'></div>
            <img className='site-logo z-index1' src={ logo } alt='logo'></img>
            <nav className=' z-index2'>
                <ul className='d-flex'>
                    <NavLink to='/' end>
                            <li  className='d-flex flex-row mt-10 mb-10 mr-20 gap-10 text-shadow-outline hover-effect-btn  active-effect'>
                                <i className='fa-solid fa-user icons i1'></i>
                                <button className='btn text-center text-shadow-outline'> Présentation</button>
                            </li>
                    </NavLink>
                    <NavLink to='projets' end>
                        <li className='d-flex flex-row  mt-10 mb-10 mr-20 gap-10 hover-effect-btn text-shadow-outline active-effect'>
                            <i className='fa-solid fa-briefcase icons i2'></i>
                            <button className='btn  text-center text-shadow-outline'> Mes projets</button>
                        </li>
                    </NavLink>
                    <NavLink to='contact' end>
                    <li className='d-flex mt-10 mb-10 mr-20 gap-10 hover-effect-btn text-shadow-outline active-effect'>
                        <i className={`fa-solid fa-envelope icons i3`}></i>
                        <button className='btn text-center text-shadow-outline'> Me contacter</button>
                    </li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
};
export default Header;