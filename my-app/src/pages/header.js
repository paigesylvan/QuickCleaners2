import React from 'react';
import Logo from '../images/qclogo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header" styles={styles.header}>
            <img src={Logo} alt='Quick Cleaners' styles={styles.logo}/>

            <div className='navigation' styles={styles.navigation}>
                <Link to="/services" className="services-button"> Our Services</Link>
                <Link to="/customers" className="customers-button"> Our Customers</Link>
            </div>
        </div>
    )
};

export default Header;
