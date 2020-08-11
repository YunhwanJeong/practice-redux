import { createStore } from 'redux';

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [];
        case DELETE_TODO:
            return [];
        default:
            return state;
    }
};

export const store = createStore(reducer);

