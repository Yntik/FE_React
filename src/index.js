import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {logger} from 'redux-logger';

import createHistory from 'history/createBrowserHistory';
import {Router, Route, Switch} from 'react-router';
import {routerReducer, routerMiddleware} from 'react-router-redux';

import AuthComponent from './components/auth/AuthComponent'
import HomePageComponent from './components/homepage/HomePageComponent'

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const initialState = {
    name: "oleg",
    surname: "belka"
}

const reducer = (state = initialState, action) => {
    return state;
}

export const store = createStore(reducer)
console.log('blaa', store.getState());


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path='/login' component={AuthComponent}/>
                <Route path='/homepage' component={HomePageComponent}/>
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
