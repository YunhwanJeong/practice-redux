import React, { useRef } from 'react';
import { connect } from 'react-redux';

import { createAction } from '../store';
import ToDo from '../components/ToDo';

function Home({ toDoList, addTodo }) {
    const input = useRef();
    const onSubmit = event => {
        event.preventDefault();
        addTodo(input.current.value);
        input.current.value = "";
    };

    return (
        <>
            <h1>ToDo</h1>
            <form onSubmit={onSubmit}>
                <input ref={input} />
                <button>add</button>
            </form>
            <ul>
                {toDoList.map((toDo) => <ToDo {...toDo} key={toDo.id}/>)}
            </ul>
        </>
    );
};

function mapStateToProps (state) {
    return { toDoList: state };
};

function mapDispatchToProps (dispatch) {
    return {
        addTodo: (text) => dispatch(createAction({ text }))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);