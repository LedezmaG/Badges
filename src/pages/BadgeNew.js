import React from 'react';

import './style.css';
import Header from '../img/badge-header.svg';

import Navbar from '../component/Navbar.js';
import Badge from '../component/badge.js';
import BadgeForm from '../component/BadgeForm.js';

class BadgeNew extends React.Component{


    render(){
        return(
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={Header} alt="logo" />
                </div>
                
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName="Israel" 
                                lastName="Ledezma" 
                                jobTitle="Web Developer" 
                                userName="LedezmaG" 
                                avatarURL="https://www.gravatar.com/avatar/HASH"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;