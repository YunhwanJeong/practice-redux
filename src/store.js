import { createStore } from 'redux';
import { createAction } from '@reduxjs/toolkit';

const prepareTodo = ({ text, id }) => {
    return {
        payload: {
            id: id ? id : Date.now(),
            text: text ? text : null,
        }
    }
};
export const addToDo = createAction("ADD", prepareTodo);
export const deleteToDo = createAction("DELETE", prepareTodo);

const reducer = (state = [], action) => {
    switch (action.type) {
        case addToDo.type:
            return [...state, action.payload];
        case deleteToDo.type:
            return state.filter((toDo) => toDo.id !== action.payload.id);
        default:
            return state;
    }
};

export const store = createStore(reducer);

