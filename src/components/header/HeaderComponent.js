import React from 'react'


export class HeaderComponent extends React.Component {
    render() {
        return <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <div className="alert alert-dismissible alert-secondary">
                        Clockwise Clockware.
                    </div>
                    <span>
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
          </li>
        </ul>
      </span>
                </div>
            </nav>
        </header>
    }
}
