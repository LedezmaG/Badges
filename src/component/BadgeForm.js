import React from 'react';

class BadgeForm extends React.Component{

    state = {};
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleClick = (e) => {
        console.log("button was clicked");
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("form was sutmited");
        console.log(this.state);
        
    }

    render(){
       
        return(
            <div>
                <h1> New Attendant </h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-geoup">
                        <label htmlFor="">First Name</label>
                        <input onChange={this.handleChange} value={this.state.firstName} type="text" name="firstName" className="form-control"/>
                    </div>
                    <div className="form-geoup">
                        <label htmlFor="">Last Name</label>
                        <input onChange={this.handleChange} value={this.state.lastName} type="text" name="lastName" className="form-control"/>
                    </div>
                    <div className="form-geoup">
                        <label htmlFor="">Email</label>
                        <input onChange={this.handleChange} value={this.state.email} type="email" name="email" className="form-control"/>
                    </div>
                    <div className="form-geoup">
                        <label htmlFor="">Job Title</label>
                        <input onChange={this.handleChange} value={this.state.jobTitle} type="text" name="jobTitle" className="form-control"/>
                    </div>
                    <div className="form-geoup">
                        <label htmlFor="">Username</label>
                        <input onChange={this.handleChange} value={this.state.Username} type="text" name="Username" className="form-control"/>
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary mt-2 mb-3">Save</button>
                </form>
            </div>  
        );
    }

}

export default BadgeForm;