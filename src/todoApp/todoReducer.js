import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from "./constant";

const initialState = {
	visibilityFilter: VisibilityFilters.SHOW_ALL,
	todos: [
		{text: 'monday', completed: true},
		{text: 'tuesday', completed: false},
		{text: 'friday', completed: true},
		{text: 'saturday', completed: false},
		{text: 'sunday', completed: false},
	],
};


const todos = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			]
		case TOGGLE_TODO:
			return state.map(todo =>
				(todo.id === action.id)
					? {...todo, completed: !todo.completed}
					: todo
			)
		case SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return state
	}
}
​
export default todos