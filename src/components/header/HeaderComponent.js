import React from 'react'
import {lsService} from '../../services/LS-service/ls-service'
import Auth from '../../services/Auth0/Auth'
import {connect} from "react-redux";

const auth = new Auth();

class HeaderComponent extends React.Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this)
    }


    logout(event) {
        this.props.auth.logout();
    }

    render() {

        return <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <div className="alert alert-dismissible alert-secondary">
                        Clockwise Clockware.
                    </div>
                    <div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="btn btn-info" href='/homepage'>Главная страница</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-info" href='/masters'>Список мастеров</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-info" href='/cities'>Список городов</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-info" href='/orders'>Список заказов</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-info" href='/clients'>Список клиентов</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-info" href='/products'>Ценовая политика</a>
                            </li>
                            <li className="nav-item">
                                    <button style={{position: 'absolute', right: 20, top: 20}} type="submit"
                                            onClick={this.logout}
                                            className="btn btn-danger">Выход
                                    </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    }

}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(HeaderComponent);