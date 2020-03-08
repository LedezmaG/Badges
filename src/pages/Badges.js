import React from 'react';

import './styles/Badges.css'
import conLogo from '../img/badge-header.svg'

<<<<<<< HEAD
=======
import Navbar from '../component/Navbar.js'
import PageLoading from '../component/PageLoading.js'
import PageError from '../component/PageError.js'
>>>>>>> 640d412cbe815df3745bbaab91f989ecaa13807a
import BadgesList from '../component/BadgesList.js'
import { Link } from 'react-router-dom';
import api from '../api'

class Badges extends React.Component{

    state = {
        loading: true,
        error: null,
<<<<<<< HEAD
        data: undefined
    };
=======
        data: undefined,
    }
>>>>>>> 640d412cbe815df3745bbaab91f989ecaa13807a

    componentDidMount (){
        this.fetchData()
    }

<<<<<<< HEAD
    fetchData = () =>{
        this.setState( { loading: true, error: null})

        try{
            const data = []
            this.setState( { loading: false, data: data})
        } catch(error){
            this.setState( { loading: false, error: error})
=======
    fetchData = async () => {
        this.setState( {loading: true, error: null})

        try {
            const data = await api.badges.list();
            this.setState( { loading: false, data: data});
        } catch (error) {
            this.setState( { loading: false, error: error});
            
>>>>>>> 640d412cbe815df3745bbaab91f989ecaa13807a
        }
    }
    

    render(){
<<<<<<< HEAD
=======

        if (this.state.loading === true) {
            return <PageLoading/>;
            }

        if (this.state.error) {
            return <PageError error={this.state.error}/>;
        }

        return(
            <div>
                <Navbar />
>>>>>>> 640d412cbe815df3745bbaab91f989ecaa13807a

        if (this.state.loading == true) {
            return 'Loading...'
        }

        return(
            <React.Fragment>
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
            </React.Fragment>

        );
    }
}

export default Badges;