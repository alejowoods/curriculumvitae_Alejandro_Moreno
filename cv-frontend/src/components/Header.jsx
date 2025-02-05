import React from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../../public/home.png';
import './../styles/header.css';



const Header = () => {
    return (
        <header>
            <h1>Alejandro</h1>
                <Link to="/" ><img src={homeImage} alt="Home link" className='home-image'></img></Link>
            <h1>Moreno</h1>
        </header>
    );
};

export default Header;