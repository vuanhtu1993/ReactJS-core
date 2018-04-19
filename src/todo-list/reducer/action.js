import {ADD_TODO} from '../constant';

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        todo,
    }
};