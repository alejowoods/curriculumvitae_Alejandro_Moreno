import React from 'react';
import GithubImage from '../../public/github-logo.png';
import './../styles/footer.css';


const Footer = () => {
    return (
        <footer>
            <p>Made with love by Alejandro Moreno</p>
            <a href="https://github.com/alejowoods" target="_blank" rel="noopener noreferrer">
                <img src={GithubImage} alt="Github link" className='github-logo'></img>
            </a>
        </footer>
    );
};

export default Footer;