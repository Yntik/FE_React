import React from 'react'
import moment from 'moment'

import {apiService} from "../../services/api-service/api-service";
import {connect} from "react-redux";
import {getOrders} from "../../store/action/ordersAction";

class OrdersComponent extends React.Component {


    constructor(props) {
        super(props);
        apiService.checkToken()
            .then(res => {
                console.log('success');
                apiService.getOrders()
                    .then(res => {
                        console.log(res.data.data);
                        props.dispatch(getOrders(res.data.data));
                    })
            })
            .catch(err => {
                this.props.history.push(`/login`)
            })
        this.onAdd = this.onAdd.bind(this);
    }

    onAdd(event) {
        console.log(event)
        this.props.history.push(`/add_order`);
    }


    render() {

        const onEdit = (order) => {
            this.props.history.push({
                pathname: '/edit_order',
                search: `?id=${order.id}&client=${order.client}&email=${order.email}&price=${order.price}&size=${order.size}&city_id=${order.idcity}&product_id=${order.idproduct}&master_id=${order.idmaster}&client_id=${order.idclient}&datetime=${order.start}`,
            })
        }
        const onDelete = async (order) => {
            await apiService.deleteOrder({id: order.id,paypal_id: order.idpaypal, route: 'orders'})
            apiService.getOrders()
                .then(res => {
                    this.props.dispatch(getOrders(res.data.data));
                })
        }
        return <div className="container">
            <div className="jumbotron">
                <h1>Список заказов</h1>
                <p>Количество заказов {this.props.orders.length}</p>
                <button type="button" className="btn btn-success" onClick={this.onAdd}>Добавить заказ</button>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Имя клиента</th>
                        <th scope="col">Электронный адрес</th>
                        <th scope="col">Город</th>
                        <th scope="col">Размер часов</th>
                        <th scope="col">Имя мастера</th>
                        <th scope="col">Фамилия мастера</th>
                        <th scope="col">Цена</th>
                        <th scope="col">Начало работы</th>
                        <th scope="col">Конец работы</th>
                        <th scope="col">Редактировать</th>
                        <th scope="col">Удалить</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.orders.map((order, i) => {
                        return (
                            <tr key={i} className="table-info">
                                <td>{order.client}</td>
                                <td>{order.email}</td>
                                <td>{order.city}</td>
                                <td>{order.size}</td>
                                <td>{order.name}</td>
                                <td>{order.surname}</td>
                                <td>{order.price}</td>
                                <td>{moment(order.start).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                <td>{moment(order.end).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                <td><input className="btn btn-warning"
                                    type="button"
                                    value="Редактировать"
                                    onClick={(event) => {
                                        onEdit(order)
                                    }}/></td>
                                <td><input className="btn btn-danger"
                                    type="button"
                                    value="Удалить"
                                    onClick={(event) => {
                                        if (window.confirm('Вы действительно хотите удалить запись?')) {
                                            onDelete(order)
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
    return state.ordersState
}

export default connect(mapStateToProps)(OrdersComponent);
