import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import CounterGroup from './components/CounterGroup/index'

const store = createStore(reducers)
ReactDOM.render(
    <Provider store={store}>
        <CounterGroup></CounterGroup>
    </Provider>
    , document.getElementById('root')
);
