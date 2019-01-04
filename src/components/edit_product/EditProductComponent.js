import React from 'react'
import {connect} from 'react-redux'
import queryString from 'query-string'
import {bindActionCreators} from 'redux'

import {apiService} from "../../services/api-service/api-service";

import {writePrice, writeSize} from '../../store/action/editProductAction'


class EditProductComponent extends React.Component {


    constructor(props) {
        super(props);
        const product = queryString.parse(this.props.location.search);
        this.state = {
            product: product
        }
        this.props.writeSize(product.size);
        this.props.writePrice(product.price);
        apiService.checkToken()
            .then(res => {
                console.log('success');
            })
            .catch(err => {
                console.log('false homepage');
                this.props.history.push(`/login`)
            })
        this.onSubmit = this.onSubmit.bind(this);
        this.onBackToList = this.onBackToList.bind(this);
    }

    onSubmit(event) {
        apiService.editProduct({id: this.state.product.id, price: this.props.price, size: this.props.size})
            .then(res => {
                console.log(res.data.data);
                this.props.history.push(`/products`)
            })
        event.preventDefault();
    }

    onBackToList(event) {
        this.props.history.push(`/products`)
    }

    render() {
        const {writeSize, writePrice} = this.props
        return <div className="container">
            <div className="jumbotron">
                <h1>Форма редактирования зависимости</h1>
                <button type="button" className="btn btn-success" onClick={this.onBackToList}>Назад к списку</button>
                <div style={{width: 300}}>
                    <form onSubmit={this.onSubmit}>
                        <label className="col-form-label">Действующий размер</label>
                        <input className="form-control" type="text" placeholder="Размер" required
                               value={this.props.size}
                               onChange={(event) => {
                                   writeSize(event.target.value);
                               }}
                        />
                        <label className="col-form-label">Действующая цена</label>
                        <input className="form-control" type="text" placeholder="Цена" required
                               value={this.props.price}
                               onChange={(event) => {
                                   writePrice(event.target.value);
                               }}
                        />
                        <p></p>
                        <button type="submit" className="btn btn-success">Внести изменения в список мастера</button>
                    </form>

                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return state.editProductState
}

const mapActionToProps = (dispatch) => {
    return {
        writeSize: bindActionCreators(writeSize, dispatch),
        writePrice: bindActionCreators(writePrice, dispatch),

    };
}

export default connect(mapStateToProps, mapActionToProps)(EditProductComponent);