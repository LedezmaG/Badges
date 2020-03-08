import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFound from '../component/NotFound.js';
import Layout from '../component/Layout.js';
import BadgeNew from '../pages/BadgeNew.js';
import Badges from '../pages/Badges.js';

function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route component={NotFound}/>
                </Switch>
            </Layout>   
        </BrowserRouter>
    )
}

export default App;