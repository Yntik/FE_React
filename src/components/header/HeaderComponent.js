import React from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {ChangePosition} from "../../store/action/headerAction";
import {getMasters} from "../../store/action/mastersAction";


class HeaderComponent extends React.Component {

    ROUTES = ['/homepage', '/masters', '/cities', '/orders', '/clients', '/products', '/callback'];
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.props.ChangePosition(this.props.history.location.pathname)
    }


    logout(event) {
        this.props.auth.logout();
    }

    render() {
        if (this.ROUTES.indexOf(this.props.headerState.position) === -1) {
            return <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <div className="alert alert-dismissible alert-secondary">
                            Clockwise Clockware.
                        </div>
                    </div>
                </nav>
            </header>
        }
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

const mapActionToProps = (dispatch) => {
    return {
        ChangePosition: bindActionCreators(ChangePosition, dispatch),
    };
};

export default connect(mapStateToProps, mapActionToProps)(HeaderComponent);