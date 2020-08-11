import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from '../routes/Home';
import Detail from '../routes/Detail';
import { store } from '../store';

function App () {
    return (
        <Provider store={store}>
            <Router>
                <Route path="/" exact component={Home}></Route>
                <Route path="/:id" component={Detail}></Route>
            </Router>
        </Provider>
    );
};

export default App;