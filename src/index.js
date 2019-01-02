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
import {Link} from 'react-router-dom';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import {initialState} from "./store/initialState/initialState";
import {reducer} from "./store/reducer";

import AuthComponent from './components/auth/AuthComponent'
import HomePageComponent from './components/homepage/HomePageComponent'
import MastersComponent from './components/masters/MastersComponent'
import AddMasterComponent from './components/add_master/AddMasterComponent'
import EditMasterComponent from './components/edit_master/EditMasterComponent'
import {HeaderComponent} from "./components/header/HeaderComponent";

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();


console.log('history', history);

export const store = createStore(reducer);


ReactDOM.render(
    <Provider store={store}>
        <HeaderComponent/>
        <Router history={history}>
            <Switch>
                <Route path='/login' component={AuthComponent}/>
                <Route path='/homepage' component={HomePageComponent}/>
                <Route path='/masters' component={MastersComponent}/>
                <Route path='/add_master' component={AddMasterComponent}/>
                <Route path='/edit_master' component={EditMasterComponent}/>
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
