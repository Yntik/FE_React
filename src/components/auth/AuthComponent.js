import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {FormComponent} from "./Form";
import {connect} from 'react-redux'

import {apiService} from "../../services/api-service/api-service";
import {lsService} from "../../services/LS-service/ls-service";
import Auth from '../../services/Auth0/Auth'
import localStorage from "localStorage";


class AuthComponent extends React.Component {

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    login(event) {
        this.props.auth.login();
    }

    // onSubmit(event) {
    //
    //     apiService.authentication({login: this.state.login, password: this.state.password})
    //         .then(res => {
    //             //store LS_
    //             console.log('success');
    //             this.setState({validation: true});
    //             lsService.save({token: res.data.data});
    //             this.props.history.push(`/homepage`)
    //         })
    //         .catch(err => {
    //             this.setState({validation: false})
    //         });
    //     event.preventDefault();
    // }
    //


    render() {
        return <div className="container" >
            <div className="jumbotron">
                    <p className="text-info">Clockwise Clockware.</p>
                    <h1>Страница входа</h1>
                    <div style={{width: 300}}>
                        <button type="button" className="btn btn-success" onClick={
                            this.login
                        }>Войти через Auth0</button>
                </div>
            </div>
        </div>
    }
}


const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(AuthComponent);


