import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
  UPDATE_TODO,
} from './constant';

const initialState = [];

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
    case UPDATE_TODO:
      // return state.map(todo => {
      // 		if (todo.id === action.newTodo.id) {
      // 			return { ...todo, text: action.newTodo.text }
      // 		}
      // 	});
      return state.map(todo =>
        (todo.id === action.newTodo.id
          ? { ...todo, text: action.newTodo.text }
          : todo));
    case DELETE_TODO:
      const newState = Object.assign([], state);
      const index = state.findIndex(todo => todo.id === action.id);
      newState.splice(index, 1);
      return newState;
    default:
      return state;
  }
}
