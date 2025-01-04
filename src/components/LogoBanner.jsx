import styles from './LogoBanner.module.scss'
import reactLogo from '../assets/logos/react-logo.webp';
import sassLogo from '../assets/logos/sass-logo.webp';
import jsLogo from '../assets/logos/js-logo.webp';
import htmlLogo from '../assets/logos/html-logo.webp';
import cssLogo from  '../assets/logos/css-logo.webp';
import nodeJsLogo from '../assets/logos/node-logo.webp';
import expressLogo from '../assets/logos/express-logo.webp';
import mongodbLogo from '../assets/logos/mongo-logo.webp';
import githubLogo from '../assets/logos/github-logo.webp';
import figmaLogo from '../assets/logos/figma-logo.webp';
import postmanLogo from '../assets/logos/postman-logo.webp';

function LogosBanner() {
    const logos = [
        reactLogo,
        sassLogo,
        jsLogo,
        cssLogo,
        htmlLogo,
        nodeJsLogo,
        expressLogo,
        mongodbLogo,
        githubLogo,
        postmanLogo,
        figmaLogo,
      ];

    return (
        <div className={styles.banner}>
            <div className={styles.slide}>
            {logos.map((logo, index) => (
                <img key={index} src={logo} alt='logo' loading="lazy" />
            ))}
            {logos.map((logo, index) => (
                <img key={`duplicate-${index}`} src={logo} alt='logo' loading="lazy" />
            ))}
            {logos.map((logo, index) => (
                <img key={`duplicate-${index}`} src={logo} alt='logo' loading="lazy" />
            ))}
            {logos.map((logo, index) => (
                <img key={`duplicate-${index}`} src={logo} alt='logo' loading="lazy" />
            ))}
            </div>
        </div>
        );
    }

export default LogosBanner;


