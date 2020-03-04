import React from 'react';

import './styles/Badges.css'
import conLogo from '../img/badge-header.svg'

import Navbar from '../component/Navbar.js'
import BadgesList from '../component/BadgesList.js'
import { Link } from 'react-router-dom';
import api from '../api';

class Badges extends React.Component{

    state = {
        loading: true,
        error: null,
        data: undefined,
    };

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () => {
        this.setState( { loading: true, error: null } );
        try {
            const data = await api.badges.list();
            this.setState( { loading: false, data: data } );
        } catch (error) {
            this.setState( { loading: false, error: error } );
        }
    }

    render(){

        if (this.state.loading === true) {
            return 'Loading ...';
        }

        return(
            <div>
                <Navbar />

                <div className="badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img src={conLogo} alt="conf logo" className="Badges_conf-logo" />
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New badge
                        </Link>
                    </div>
                </div>

                <div className="Badges__list">
                    <div className="Badges__conteiner">
                        <BadgesList badges={this.state.data} className="Badges__list" />
                    </div>
                </div>
            </div>

        );
    }
}

export default Badges;