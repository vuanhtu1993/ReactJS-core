import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  DELETE_TODO,
  UPDATE_TODO,
} from './constant';

let nextTodoId = 1;
export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text,
});
export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});

export const delTodo = id => ({
  type: DELETE_TODO,
  id,
});

export const updateTodo = newTodo => ({
  type: UPDATE_TODO,
  newTodo,
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});
