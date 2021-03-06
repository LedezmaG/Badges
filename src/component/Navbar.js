import React from 'react';
import Logo from '../img/logo.svg';
import './styles/Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends React.Component{

    render(){
        return(

            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar__brand" to="/">
                        <img className="Navbar__brand-logo" src={Logo} alt="Logo" />
                        <span className="font-weight-light">Badge</span>
                        <span className="font-weight-bold">Conf</span>
                    </Link>
                </div>
            </div>

        )
    }
}

export default Navbar;