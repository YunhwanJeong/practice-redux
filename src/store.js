import { configureStore, createSlice } from '@reduxjs/toolkit';

const toDos = createSlice({
    name: 'toDos',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload.text, id: Date.now() })
        },
        remove: (state, action) => state.filter((toDo) => toDo.id !== action.payload.id)
    }
});

export const { add, remove } = toDos.actions;
export const store = configureStore({ reducer: toDos.reducer });

