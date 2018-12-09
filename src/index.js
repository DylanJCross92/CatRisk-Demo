import React, { Component } from 'react';
import {render} from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import ReduxThunk from 'redux-thunk'
import allReducers from "./Reducers";
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(allReducers,
    compose(applyMiddleware(ReduxThunk))
);
render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app'));
//registerServiceWorker();