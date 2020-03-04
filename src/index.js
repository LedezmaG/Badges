import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import App from './component/App.js'
import BadgeNew from './pages/BadgeNew'
import Badge from './pages/Badges'

const conteiner = document.getElementById('app');

ReactDOM.render(<Badge/>, conteiner);

