import React from 'react'
import {lsService} from '../../services/LS-service/ls-service'


export class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log('header page', this.props.history);
        console.log('listen', this.props.history.listen);
    }


    logout(event) {
        lsService.clear();
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
                                <form onSubmit={this.logout}>
                                    <button style={{position: 'absolute', right: 20, top: 20}} type="submit"
                                            className="btn btn-danger">Выход
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    }


}

