import { addTodo, toggleTodo, setVisibility, VisibilityFilters } from './todoAction';

import { createStore } from 'redux';
import todoApp from './todoReducer';
const store = createStore(todoApp);

// Log initial state
console.log(store.getState());

// Register listener
const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
​
// Stop listening to state updates
unsubscribe();