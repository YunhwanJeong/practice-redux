import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createAction } from '../store';

function ToDo ({ text, deleteTodo, id }) {
    return (
        <Link to={`/${id}`}>
            <li>
                {text}
                <button onClick={deleteTodo}>del</button>
            </li>
        </Link>
    );
};

function mapDispatchToProps (dispatch, { id }) {
    return {
        deleteTodo: () => dispatch(createAction({ id }))
    }
};

export default connect(null, mapDispatchToProps)(ToDo);