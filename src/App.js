import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'

import {AuthComponent} from "./components/auth/AuthComponent";
import {HomePageComponent} from "./components/homepage/HomePageComponent"
import {MastersComponent} from "./components/masters/MastersComponent";

class App extends Component {
  render() {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link to='/login'>login</Link></li>
                        <li><Link to='/homepage'>Homepage</Link></li>
                        <li><Link to='/masters'>Masters</Link></li>
                    </ul>
                </nav>
            </header>
            <div>
                <Switch>
                    <Route path='/login' component={AuthComponent}/>
                    <Route path='/homepage' component={HomePageComponent}/>
                    <Route path='/masters' component={MastersComponent}/>
                </Switch>
            </div>
        </div>
    );
  }
}

export default App;
