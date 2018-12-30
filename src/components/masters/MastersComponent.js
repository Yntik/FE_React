import React from 'react'

import {apiService} from "../../services/api-service/api-service";
import {connect} from "react-redux";
import {getMasters} from "../../store/action/mastersAction";


class MastersComponent extends React.Component {


    constructor(props) {
        super(props);
        apiService.checkToken()
            .then(res => {
                console.log('success');
                apiService.getMasters()
                    .then(res => {
                        props.dispatch(getMasters(res.data.data));
                    })
            })
            .catch(err => {
                this.props.history.push(`/login`)
            })
        this.onAddMaster = this.onAddMaster.bind(this);
    }
    onAddMaster(event) {
        console.log(event)
        this.props.history.push(`/add_master`);
    }

    render() {
        return <div className="container">
            <div className="jumbotron">
                <h1>Список мастеров</h1>
                <p>Количество мастеров {this.props.masters.length}</p>
                <button type="button" className="btn btn-success" onClick={this.onAddMaster} >Добавить мастера</button>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Фамилия</th>
                        <th scope="col">Рейтинг</th>
                        <th scope="col">Город</th>
                        <th scope="col">Редактировать</th>
                        <th scope="col">Удалить</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.masters.map((master, i) => {
                        return (
                            <tr key={i} className="table-info">
                                <td>{master.name}</td>
                                <td>{master.surname}</td>
                                <td>{master.rating}</td>
                                <td>{master.city}</td>
                                <td>Red</td>
                                <td>delete</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return state.mastersState
}

export default connect(mapStateToProps)(MastersComponent);
