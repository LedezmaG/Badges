import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './component/badge';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

const conteiner = document.getElementById('app');

ReactDOM.render(<Badge 
    firstName = "Israel" 
    lastName  = "Ledezma" 
    avatarURL = "https://www.gravatar.com/avatar/HASH"
    jobTitle  = "Web Developer" 
    userName  = "LedezmaG"
    />,
     conteiner);