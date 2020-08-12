import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { remove } from '../store';

function ToDo ({ text, dispatchToDoId, id }) {
    return (
        <>
            <li>
                <Link to={`/${id}`}>
                    {text}
                </Link>
                <button onClick={dispatchToDoId}>del</button>
            </li>
        </>
    );
};

function mapDispatchToProps (dispatch, { id }) {
    return {
        dispatchToDoId: () => dispatch(remove({ id }))
    }
};

export default connect(null, mapDispatchToProps)(ToDo);