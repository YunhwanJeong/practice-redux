import { createStore } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

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

const reducer = createReducer([], {
    [addToDo]: (state, action) => {
        state.push(action.payload)
    },
    [deleteToDo.type]: (state, action) => {
        return state.filter((toDo) => toDo.id !== action.payload.id)
    }
});

export const store = createStore(reducer);

