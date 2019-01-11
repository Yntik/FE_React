import React from 'react'

import {connect} from 'react-redux'




class AuthComponent extends React.Component {

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    login(event) {
        this.props.auth.login();
    }



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


