import React from 'react';
import { connect } from 'react-redux';

function Home(props) {
    console.log(props);
    return (
        <>
            <h1>ToDo</h1>
            <form>
                <input />
                <button>add</button>
            </form>
        </>
    );
};

function mapStateToProps (state) {
    return { state };
};

export default connect(mapStateToProps)(Home);