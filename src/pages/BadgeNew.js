import React from 'react';

import './style.css';
import Header from '../img/badge-header.svg';

import Navbar from '../component/Navbar.js';
import Badge from '../component/badge.js';
import BadgeForm from '../component/BadgeForm.js';

class BadgeNew extends React.Component{

    state = { 
        from: {
            firstName:"", 
            lastName:"",
            jobTitle:"", 
            userName:"",
        }
    };

    handleChange = e => {
        // const nextForm = this.state.form;
        // nextForm[e.target.name] = e.target.value;

        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

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
                                firstName={this.state.from.firstName}
                                lastName={this.state.from.lastName}
                                jobTitle={this.state.from.jobTitle}
                                userName={this.state.from.username}
                                email={this.state.from.email}            
                                avatarURL="https://www.gravatar.com/avatar/HASH"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                formValues={this.state.from}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;