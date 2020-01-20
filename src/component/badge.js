import React from 'react';
import Logo from '../img/badge-header.svg';
import "./styles/badge.css";

class Badge extends React.Component {

    // Metodo obligatorio
    render() {

        return (
            
            <div className="Badge">

                <div className="Badge__header">
                    <img src={Logo} alt="Logo de conferencia"></img>
                </div>    

                <div className="Badge__section-name">
                    <img src={this.props.avatarURL} alt="" className="Badge__avatar"></img>
                    <h1> 
                        {this.props.firstName} <br/> {this.props.lastName} 
                    </h1>
                </div>

                <div className="Badge__section-info">
                    <p>{this.props.jobTitle}</p>
                </div>

                <div className="Badge__footer">
                    {this.props.userName}
                </div>
        
            </div>
        )
    }
}

export default Badge;