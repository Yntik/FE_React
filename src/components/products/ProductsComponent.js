import React from 'react'

import {apiService} from "../../services/api-service/api-service";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux'
import {getProducts} from "../../store/action/productsAction";


class ProductsComponent extends React.Component {


    constructor(props) {
        super(props);
        apiService.checkToken()
            .then(res => {
                console.log('success');
                apiService.getProducts()
                    .then(res => {
                        console.log('yeah',res.data.data)
                        this.props.getProducts(res.data.data);
                    })
            })
            .catch(err => {
                this.props.history.push(`/login`)
            })
        this.onAdd = this.onAdd.bind(this);
    }

    onAdd(event) {
        console.log(event)
        this.props.history.push(`/add_product`);
    }


    render() {

        const onEdit = (product) => {
            this.props.history.push({
                pathname: '/edit_product',
                search: `?id=${product.id}&size=${product.size}&price=${product.price}`,
            })
        }
        const onDelete = async (product) => {
            console.log('egp');
            await apiService.delete({id: product.id, route: 'product'})
            apiService.getProducts()
                .then(res => {
                    this.props.getProducts(res.data.data);
                })
        }
        return <div className="container">
            <div className="jumbotron">
                <h1>Список ценовой зависимости</h1>
                <p>Количество зависимостей {this.props.products.length}</p>
                <button type="button" className="btn btn-success" onClick={this.onAdd}>Добавить зависимость</button>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Размер часов</th>
                        <th scope="col">Цена грн</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col">Редактировать</th>
                        <th scope="col">Удалить</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.products.map((product, i) => {
                        return (
                            <tr key={i} className="table-info">
                                <td>{product.size}</td>
                                <td>{product.price}</td>
                                <td></td>
                                <td></td>
                                <td><input className="btn btn-warning"
                                    type="button"
                                    value="Редактировать"
                                    onClick={(event) => {
                                        onEdit(product)
                                    }}/></td>
                                <td><input className="btn btn-danger"
                                    type="button"
                                    value="Удалить"
                                    onClick={(event) => {
                                        if (window.confirm('Вы действительно хотите удалить запись?')) {
                                            onDelete(product)
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
    return state.productsState
};

const mapActionToProps = (dispatch) => {
    return {
        getProducts: bindActionCreators(getProducts, dispatch),
    };
}

export default connect(mapStateToProps,mapActionToProps)(ProductsComponent);
