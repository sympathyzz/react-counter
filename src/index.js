import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import CounterGroupContainer from './containers/counterGroupContainer'
import reducers from './reducers/index'

const store = createStore(reducers)
ReactDOM.render(
    <Provider store={store}>
        <CounterGroupContainer></CounterGroupContainer>
    </Provider>
    , document.getElementById('root')
);
