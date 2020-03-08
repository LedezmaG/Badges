import React from 'react';

import './styles/BadgeNew.css';
import Header from '../img/badge-header.svg';

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
            <React.Fragment>
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
                                avatarURL="https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
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
            </React.Fragment>
        )
    }
}

export default BadgeNew;