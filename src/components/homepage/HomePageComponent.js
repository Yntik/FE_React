import React from 'react'
import ReactDOM from 'react-dom'

import {apiService} from "../../services/api-service/api-service";

export class HomePageComponent extends React.Component {


    constructor(props) {
        super(props);
        apiService.checkToken()
            .then(res => {
                console.log('success');
            })
            .catch(err => {
                this.props.history.push(`/login`)
            })


    }

    render() {
        return <div>
            <h1>HomePageComponent</h1>
        </div>
    }
}

