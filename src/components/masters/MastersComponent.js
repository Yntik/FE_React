import React from 'react'

import {apiService} from "../../services/api-service/api-service";
import {connect} from "react-redux";
import {getMasters} from "../../store/action/mastersAction";
import {bindActionCreators} from "redux";


class MastersComponent extends React.Component {


    constructor(props) {
        super(props);
        apiService.checkToken()
            .then(res => {
                console.log('success');
                apiService.getMasters()
                    .then(res => {
                        this.props.getMasters(res.data.data);
                        console.log(this.props);
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

        const onEditMaster = (master) => {
            this.props.history.push({
                pathname: '/edit_master',
                search: `?id=${master.id}&name=${master.name}&surname=${master.surname}&rating=${master.rating}&city=${master.idcity}`,
            })
        }
        const onDeleteMaster = (master) => {
            console.log('egp')
            apiService.delete({id: master.id, route: 'masters'})
            apiService.getMasters()
                .then(res => {
                    this.props.getMasters(res.data.data);
                })
        }
        return <div className="container">
            <div className="jumbotron">
                <h1>Список мастеров</h1>
                <p>Количество мастеров {this.props.masters.length}</p>
                <button type="button" className="btn btn-success" onClick={this.onAddMaster}>Добавить мастера</button>
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
                                <td><input
                                    type="button"
                                    value="Редактировать"
                                    onClick={(event) => {
                                        onEditMaster(master)
                                    }}/></td>
                                <td><input
                                    type="button"
                                    value="Удалить"
                                    onClick={(event) => {
                                        if (window.confirm('Вы действительно хотите удалить запись?')) {
                                            onDeleteMaster(master)
                                        }
                                    }}/></td>
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
};

const mapActionToProps = (dispatch) => {
    return {
        getMasters: bindActionCreators(getMasters, dispatch),
    };
};

export default connect(mapStateToProps, mapActionToProps)(MastersComponent);
