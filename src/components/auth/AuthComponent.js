import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {FormComponent} from "./Form";
import {connect} from 'react-redux'

import {apiService} from "../../services/api-service/api-service";
import {lsService} from "../../services/LS-service/ls-service";

class AuthComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            validation: true
        };
        this.onLoginChange = this.onLoginChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit(event) {

        apiService.authentication({login: this.state.login, password: this.state.password})
            .then(res => {
                //store LS_
                this.setState({validation: true});
                lsService.save({token: res.data.data});
                this.props.history.push(`/homepage`)
            })
            .catch(err => {
                this.setState({validation: false})
            });
        event.preventDefault();
    }

    onLoginChange(event) {
        this.setState({login: event.target.value});
    }

    onPasswordChange(event) {
        this.setState({password: event.target.value});
    }



    render() {
        return (
            <FormComponent
                onSubmit={this.onSubmit}
                onLoginChange={this.onLoginChange}
                onPasswordChange={this.onPasswordChange}
                validation={this.state.validation}
            />
        )
    }
}

const initialState = {
    name: "oleg",
    surname: "belka"
}

const reducer = (state = initialState, action) => {
    return state;
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        test: 1
    }
}

export default connect(mapStateToProps)(AuthComponent);


