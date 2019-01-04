import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import '../../App.css'
import error from './images/404.jpg'
import {apiService} from "../../services/api-service/api-service";

class ErrorComponent extends React.Component {

    constructor(props) {
        super(props);
        apiService.checkToken()
            .then(res => {
                console.log(this.props) ;
                console.log('success');
            })
            .catch(err => {
                console.log('false homepage');
                this.props.history.push(`/error`)
            })


    }

    render() {
        return <div className="container">
            <div className="jumbotron">
                <h2><p className="text-info">Clockwise Clockware.</p></h2>
                <h1 className="text-danger">Ошибка</h1>
                <div className="App">
                    <p></p>
                    <p></p>
                    <p></p>
                    <img src={error} className="App-logo" alt="logo" />
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return state
}

export default connect(mapStateToProps)(ErrorComponent);