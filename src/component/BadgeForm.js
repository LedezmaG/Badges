import React from 'react';

class BadgeForm extends React.Component{

    handleChange = (e) => {
        console.log({ 
            name: e.target.name,
            value: e.target.value 
        });
    }

    handleClick = (e) => {
        console.log("button was clicked");
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("form was sutmited");
        
    }

    render(){
       
        return(
            <div>
                <h1> New Attendant </h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-geoup">
                        <label htmlFor="">First Name</label>
                        <input onChange={this.handleChange} type="text" name="firstName" className="form-control"/>
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>  
        );
    }

}

export default BadgeForm;