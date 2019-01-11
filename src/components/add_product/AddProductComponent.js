import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {apiService} from "../../services/api-service/api-service";

import {writePrice, writeSize} from '../../store/action/addProductAction'


class AddProductComponent extends React.Component {

    MAX_INPUT_LENGTH = 30;
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
        this.onValid = this.onValid.bind(this);
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

    onValid(value) {
        let ValidStr = '';
        for (let i in value) {
            console.log(value[i]);
            if (ValidStr.length >= this.MAX_INPUT_LENGTH) {
                continue
            }
            else if(value[i].match(/[0-9/.]/ )) {
                ValidStr += value[i];
            }
        }
        return ValidStr
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
                        <input className="form-control" type="text"  placeholder="Размер" required
                               value={this.props.size}
                               onChange={(event) => {
                                   writeSize(this.onValid(event.target.value));
                               }}
                        />
                        <label className="col-form-label">Цена</label>
                        <input className="form-control" type="text" placeholder="Цена" required
                               value={this.props.price}
                               onChange={(event) => {
                                   writePrice(this.onValid(event.target.value));
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