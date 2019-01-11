import React from 'react'

import {apiService} from "../../services/api-service/api-service";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux'
import {getClients} from "../../store/action/clientsAction";


class ClientsComponent extends React.Component {


    constructor(props) {
        super(props);
        apiService.checkToken()
            .then(res => {
                console.log('success');
                apiService.getClients()
                    .then(res => {
                        console.log('yeah',res.data.data)
                        this.props.getClients(res.data.data);
                    })
            })
            .catch(err => {
                this.props.history.push(`/login`)
            })
    }


    render() {

        const onEdit = (client) => {
            this.props.history.push({
                pathname: '/edit_client',
                search: `?id=${client.id}&name=${client.name}&email=${client.email}&city_id=${client.idcity}`,
            })
        }
        const onDelete = async (client) => {
            await apiService.delete({id: client.id, route: 'clients'});
            apiService.getClients()
                .then(res => {
                    this.props.getClients(res.data.data);
                })
        }
        return <div className="container">
            <div className="jumbotron">
                <h1>Список клиентов</h1>
                <p>Количество клиентов {this.props.clients.length}</p>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Имя клиента</th>
                        <th scope="col">Электронная почта</th>
                        <th scope="col">Город</th>
                        <th scope="col"></th>
                        <th scope="col">Редактировать</th>
                        <th scope="col">Удалить</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.clients.map((client, i) => {
                        return (
                            <tr key={i} className="table-info">
                                <td>{client.name}</td>
                                <td>{client.email}</td>
                                <td>{client.city}</td>
                                <td></td>
                                <td><input className="btn btn-warning"
                                    type="button"
                                    value="Редактировать"
                                    onClick={(event) => {
                                        onEdit(client)
                                    }}/></td>
                                <td><input className="btn btn-danger"
                                    type="button"
                                    value="Удалить"
                                    onClick={(event) => {
                                        if (window.confirm('Вы действительно хотите удалить запись?')) {
                                            onDelete(client)
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
    return state.clientsState
};

const mapActionToProps = (dispatch) => {
    return {
        getClients: bindActionCreators(getClients, dispatch),
    };
}

export default connect(mapStateToProps,mapActionToProps)(ClientsComponent);
