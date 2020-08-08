import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import GroupCounter from './components/GroupCounter/index'

const store = createStore(reducers)
ReactDOM.render(
    <Provider store={store}>
        <GroupCounter></GroupCounter>
    </Provider>
    , document.getElementById('root')
);
