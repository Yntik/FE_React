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

import CitiesComponent from "./components/cities/CitiesComponent";
import AddCityComponent from './components/add_city/AddCityComponent'
import {EditCityComponent} from './components/edit_city/EditCityComponent'

import OrdersComponent from "./components/orders/OrdersComponent";
import AddOrderComponent from "./components/add_order/AddOrderComponent";

import ClientsComponent from "./components/clients/ClientsComponent";
import EditClientComponent from "./components/edit_client/EditClientComponent";

import ProductsComponent from "./components/products/ProductsComponent";

import EditProductComponent from "./components/edit_product/EditProductComponent";
import AddProductComponent from "./components/add_product/AddProductComponent";


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

                <Route path='/cities' component={CitiesComponent}/>
                <Route path='/add_city' component={AddCityComponent}/>
                <Route path='/edit_city' component={EditCityComponent}/>

                <Route path='/orders' component={OrdersComponent}/>
                <Route path='/add_order' component={AddOrderComponent}/>

                <Route path='/clients' component={ClientsComponent}/>
                <Route path='/edit_client' component={EditClientComponent}/>

                <Route path='/products' component={ProductsComponent}/>
                <Route path='/edit_product' component={EditProductComponent}/>
                <Route path='/add_product' component={AddProductComponent}/>
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
