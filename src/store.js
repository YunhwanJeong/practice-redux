import { createStore } from 'redux';

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

export const createAction = ({ text, id }) => {
    if (text) {
        return {
            type: ADD_TODO,
            text,
            id: Date.now()
        }
    } else if (id) {
        return {
            type: DELETE_TODO,
            id,
        }
    }
};

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, { text: action.text, id: action.id}];
        case DELETE_TODO:
            return state.filter((toDo) => toDo.id !== action.id);
        default:
            return state;
    }
};

export const store = createStore(reducer);

