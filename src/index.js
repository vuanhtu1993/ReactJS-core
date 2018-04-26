import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './include/bootstrap'; // or import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Config store
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import { todoReducer } from './todoApp/todoReducer';

const store = createStore(todoReducer);


ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	,
	document.getElementById('root'));
registerServiceWorker();
