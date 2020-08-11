import React from 'react';
import { connect } from 'react-redux'; 
import { createAction } from '../store';

function ToDo ({ text, deleteTodo }) {
    return (
        <li>
            {text}
            <button onClick={deleteTodo}>del</button>
        </li>
    );
};

function mapDispatchToProps (dispatch, { id }) {
    return {
        deleteTodo: () => dispatch(createAction({ id }))
    }
};

export default connect(null, mapDispatchToProps)(ToDo);