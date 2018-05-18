import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import './include/bootstrap'; // or import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from "./App";



ReactDOM.render(
    <App/>, document.getElementById('root')
);
registerServiceWorker();
