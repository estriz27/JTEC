import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Popup from 'react-popup';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);



Popup.create({
    title: null,
    content: 'Test',
    className: 'alert',
    buttons: {
    	left: ['cancel'],
        right: ['ok']
    },
 
    position: {x: 100, y: 200},
    position: 'absolute'


});









