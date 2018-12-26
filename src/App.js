import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import {AuthComponent} from "./components/auth/AuthComponent";
import {HomePageComponent} from "./components/homepage/HomePageComponent"

class App extends Component {
  render() {
    return (
        <div>
            {/*<Header />*/}
            <div>
                <Switch>
                    <Route path='/login' component={AuthComponent}/>
                    <Route path='/homepage' component={HomePageComponent}/>
                </Switch>
            </div>
        </div>
    );
  }
}

export default App;
