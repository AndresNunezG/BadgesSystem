import React from 'react';
import { Link } from 'react-router-dom';

import "../components/styles/Navbar.css"
import NavbarLogo from '../images/NavbarLogo.svg';

class Navbar extends React.Component {
    render () {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                <Link to="/">
                    <img className="Navbar__Logo" src={NavbarLogo} alt="Logo"></img>
                    <span className="Navbar__text text__light">Dev </span>
                    <span className="Navbar__text text__bold">Conf</span>
                </Link>
                </div>
            </div>
        );
    }
}

export default Navbar;