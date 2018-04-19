import {ADD_TODO} from '../constant';

const todoReducer = (state = ['list'], action) => {
    switch (action.type) {
        case ADD_TODO:
            state = [...state, action.todo];
            return state;
        default:
            return state;
    }
};

export default todoReducer;