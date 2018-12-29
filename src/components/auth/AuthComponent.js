import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {FormComponent} from "./Form";
import {connect} from 'react-redux'

import {apiService} from "../../services/api-service/api-service";
import {lsService} from "../../services/LS-service/ls-service";
import {initialState} from "../../store/initialState/initialState";


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
                console.log('success');
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




const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps)(AuthComponent);


