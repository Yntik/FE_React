import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {apiService} from "../../services/api-service/api-service";

import {writePrice, writeSize} from '../../store/action/addProductAction'


class AddProductComponent extends React.Component {


    constructor(props) {
        super(props);
        apiService.checkToken()
            .then(res => {
                console.log('success');
            })
            .catch(err => {
                console.log('false homepage');
                this.props.history.push(`/login`)
            });
        this.onSubmit = this.onSubmit.bind(this);
        this.onBackToList = this.onBackToList.bind(this);
    }

    onSubmit(event) {
        apiService.addProduct({size: this.props.size, price: this.props.price})
            .then(res => {
                console.log(res.data.data);
                this.props.history.push(`/products`)
            })
            .catch(err => {
                this.props.history.push(`/error`)
            })
        event.preventDefault();
    }

    onBackToList(event) {
        this.props.history.push(`/products`)
    }

    render() {
        const {writeSize, writePrice} = this.props;
        return <div className="container">
            <div className="jumbotron">
                <h1>Форма добавления зависимости цена/время</h1>
                <button type="button" className="btn btn-success" onClick={this.onBackToList}>Назад к списку</button>
                <div style={{width: 300}}>
                    <form onSubmit={this.onSubmit}>
                        <label className="col-form-label">Размер</label>
                        <input className="form-control" type="number" placeholder="Размер" required
                               value={this.props.size}
                               onChange={(event) => {
                                   writeSize(event.target.value);
                               }}
                        />
                        <label className="col-form-label">Цена</label>
                        <input className="form-control" type="number" placeholder="Цена" required
                               value={this.props.price}
                               onChange={(event) => {
                                   writePrice(event.target.value);
                               }}
                        />
                        <p></p>
                        <button type="submit" className="btn btn-success">Добавить зависимость</button>
                    </form>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return state.addProductState
};

const mapActionToProps = (dispatch) => {
    return {
        writeSize: bindActionCreators(writeSize, dispatch),
        writePrice: bindActionCreators(writePrice, dispatch)
    };
};

export default connect(mapStateToProps, mapActionToProps)(AddProductComponent);