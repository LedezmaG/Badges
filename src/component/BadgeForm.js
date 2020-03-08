import React from 'react';

class BadgeForm extends React.Component{
    constructor(props, state) {
        super(props);
        this.state = {

        }
    }
/*     handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
 */
    handleClick = (e) => {
        console.log("button was clicked");
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("form was sutmited");
        console.log(this.state);
        
    }

    render(){
       console.log(this.props.formValues);
        return(
            <React.Fragment>
                <h1> New Attendant </h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">First Name</label>
                        <input onChange={this.props.onChange} value={this.props.formValues.firstName} type="text" name="firstName" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Last Name</label>
                        <input onChange={this.props.onChange} value={this.props.formValues.lastName} type="text" name="lastName" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input onChange={this.props.onChange} value={this.props.formValues.email} type="email" name="email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Job Title</label>
                        <input onChange={this.props.onChange} value={this.props.formValues.jobTitle} type="text" name="jobTitle" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Username</label>
                        <input onChange={this.props.onChange} value={this.props.formValues.Username} type="text" name="Username" className="form-control"/>
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary mt-2 mb-3">Save</button>
                </form>
            </React.Fragment>  
        );
    }

}

export default BadgeForm;