import React from 'react';
import ReactDOM from 'react-dom';


import 'bootstrap/dist/css/bootstrap.css';
import './global.css';


import App from './component/App.js'

const conteiner = document.getElementById('app');

ReactDOM.render(<App/>, conteiner);