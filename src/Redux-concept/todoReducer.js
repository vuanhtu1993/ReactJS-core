import { ADD_TODO, TOGGLE_TODO, VISIBILITY, VisibilityFilters } from "./todoAction";
// REDUCERS
const initialState = {
	visibilityFilter: VisibilityFilters.SHOW_ALL,
	todos: [],
};

function todoApp(state = initialState, action) {
	switch (action.type) {
		case VISIBILITY:
			return Object.assign({}, state, {
				visibilityFilter: action.filter,
			});
		case ADD_TODO:
			return [
				...state,
				{
					text: action.text,
					completed: false,
				},
			];
		case TOGGLE_TODO:
			return Object.assign({}, state, {
				todos: state.todos.map((todo, index) => {
					if (index === action.index) {
						return Object.assign({}, todo, {
							completed: !todo.completed,
						});
					}
				}),
			});
		default: return state;
	}
}
export default todoApp;