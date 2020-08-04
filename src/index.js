import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers/index'
import CounterGroupContainer from './containers/counterGroupContainer';

const store = createStore(reducers)
ReactDOM.render(
    <Provider store={store}>
        <CounterGroupContainer></CounterGroupContainer>
    </Provider>
    , document.getElementById('root')
);
