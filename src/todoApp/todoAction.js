import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  DELETE_TODO,
  UPDATE_TODO,
} from './constant';

const nextTodoId = 0;
export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId + 1,
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
