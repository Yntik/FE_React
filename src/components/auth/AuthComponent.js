import React from 'react'
import ReactDOM from 'react-dom'

import {FormComponent} from "./Form";

import {apiService} from "../../services/api-service/api-service";
import {lsService} from "../../services/LS-service/ls-service";

export class AuthComponent extends React.Component {
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

    onValidationChange(event) {
        this.setState({validation: event.target.value});
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

ReactDOM.render(
    <AuthComponent/>,
    document.getElementById('root')
);

