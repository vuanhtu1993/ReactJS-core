import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodosRedux from './todo-list/todo';
import registerServiceWorker from './registerServiceWorker';
import './include/bootstrap'; // or import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import todoReducer from './todo-list/reducer/reducer';

const store = createStore(todoReducer);

ReactDOM.render(
    <Provider store={store}><TodosRedux /></Provider>, document.getElementById('root')
);
registerServiceWorker();
