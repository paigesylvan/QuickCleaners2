import React from 'react';
import Logo from '../images/qclogo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt='Quick Cleaners'/>

            <div className='navigation'>
                <Link className="text-amber-600 mr-8" to="/services"> Our Services</Link>
                <Link to="/customers" className="customers-button"> Our Customers</Link>
            </div>
        </div>
    )
};

export default Header;
