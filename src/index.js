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
import {initialState} from "./store/initialState/initialState";
import {reducer} from "./store/reducer";

import AuthComponent from './components/auth/AuthComponent'
import HomePageComponent from './components/homepage/HomePageComponent'
import MastersComponent from './components/masters/MastersComponent'

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();




export const store = createStore(reducer);


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path='/login' component={AuthComponent}/>
                <Route path='/homepage' component={HomePageComponent}/>
                <Route path='/masters' component={MastersComponent}/>
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
