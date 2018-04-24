// CONSTANT
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const VISIBILITY = 'VISIBILITY';

// ACTIONS
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

export function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    index,
  };
}

export function setVisibility(filter) {
  return {
    type: VISIBILITY,
    filter,
  };
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

