import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'

import {apiService} from "../../services/api-service/api-service";

class HomePageComponent extends React.Component {


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

const mapStateToProps = (state) => {
    console.log(state)
    return state
}

export default connect(mapStateToProps)(HomePageComponent);