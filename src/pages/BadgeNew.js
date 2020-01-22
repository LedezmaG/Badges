import React from 'react';

import './style.css';
import Header from '../img/badge-header.svg';

import Navbar from '../component/Navbar.js';
import Badge from '../component/badge.js';
import BadgeForm from '../component/BadgeForm.js';

class BadgeNew extends React.Component{

    state = { 
        form: {
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
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                jobTitle={this.state.form.jobTitle}
                                userName={this.state.form.username}
                                email={this.state.form.email}            
                                avatarURL="https://www.gravatar.com/avatar/HASH"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;