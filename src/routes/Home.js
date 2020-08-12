import React, { useRef } from 'react';
import { connect } from 'react-redux';

import { addToDo } from '../store';
import ToDo from '../components/ToDo';

function Home({ toDoList, dispatchTodo }) {
    const input = useRef();
    const onSubmit = event => {
        event.preventDefault();
        dispatchTodo(input.current.value);
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
        dispatchTodo: (text) => dispatch(addToDo({ text }))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);