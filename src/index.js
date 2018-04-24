import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './include/bootstrap'; // or import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Config store


ReactDOM.render(

	<App />,
	document.getElementById('root'));
registerServiceWorker();
