import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './registerServiceWorker.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';




console.log(`${process.env.PUBLIC_URL}`)
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
