import styles from './Header.module.scss';
// import logo from '../../public/logo.png';

function Header () {
    return (
        <header className='d-flex flex-row flex-fill  justify-content-sb background-blurred p-15'>
            {/* <img className='image-logo' src={ logo } alt='logo'></img> */}
            <nav className='d-flex flex-row'>
                <ul className='d-flex flex-row '>
                    <li className='d-flex flex-column all-center hover-effect-classic active-effect'>
                        <i className='fa-solid fa-user logo'></i>
                        <button className='btn mr-10'> PRESENTATION</button>
                    </li>
                    <li className='d-flex flex-column all-center hover-effect-classic active-effect'>
                    <i className='fa-solid fa-briefcase logo'></i>
                        <button className='btn mr-10'> MES PROJETS</button>
                    </li>
                    <li className='d-flex flex-column all-center hover-effect-classic active-effect'>
                    <i className='fa-solid fa-envelope logo'></i>
                    <button className='btn mr-10'> ME CONTACTER</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
};
export default Header;