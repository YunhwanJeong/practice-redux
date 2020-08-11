import React from 'react';
import { connect } from 'react-redux';

function Detail({ toDo }) {
    return (
        <>
            <h1>할 일: {toDo?.text}</h1>
            <h5>id: {toDo?.id}</h5>
        </>
    );
};

function mapStateToProps (state, ownProps) {
    const {
        match: {
            params: {
                id
            }
        }
    } = ownProps;
    return {
        toDo: state.find(toDo => toDo.id === parseInt(id))
    };
};

export default connect(mapStateToProps)(Detail);