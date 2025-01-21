import styles from './Header.module.scss';
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

function Header () {
    return (
        <header className={` d-flex flex-row flex-fill justify-content-sb p-15 `}>
            <div className='overlay'></div>
            <img className='site-logo z-index1' src={ logo } alt='logo'></img>
            <nav className='d-flex flex-row '>
                <ul className='d-flex flex-row '>
                    <NavLink to='/' end>
                            <li  className='d-flex flex-row all-center mt-10 mb-10 mr-20 gap-10 hover-effect-btn active-effect'>
                                <i className='fa-solid fa-user icons '></i>
                                <button className='btn text-center'> Présentation</button>
                            </li>
                    </NavLink>
                    <NavLink to='projets' end>
                        <li className='d-flex flex-row all-center mt-10 mb-10 mr-20 gap-10 hover-effect-btn active-effect'>
                            <i className='fa-solid fa-briefcase icons'></i>
                            <button className='btn  text-center'> Mes projets</button>
                        </li>
                    </NavLink>
                    <NavLink to='contact' end>
                    <li className='d-flex flex-row all-center mt-10 mb-10 mr-20 gap-10 hover-effect-btn active-effect'>
                        <i className='fa-solid fa-envelope icons'></i>
                        <button className='btn text-center'> Me contacter</button>
                    </li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
};
export default Header;