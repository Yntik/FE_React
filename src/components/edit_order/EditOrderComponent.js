import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import queryString from 'query-string'

import {apiService} from "../../services/api-service/api-service";

import {
    writeClient,
    writeEmail,
    choosePrice,
    chooseSize,
    chooseDatetime,
    chooseCity,
    chooseProduct,
    chooseMaster,
    getMasters,
    getProducts,
    onEditOrder,
    getCities
} from '../../store/action/editOrderAction'
import moment from "moment/moment";

function Message(props) {
    if (props.flag) {
        const message = (
            <h6 className="text-danger">
                Свободных мастеров нет <br/>
                Выберите другие параметры(Дата, время)
            </h6>
        )
        return message
    }
    else {
        return <div></div>
    }
}


class EditOrderComponent extends React.Component {

    inputControl = [1, 1, 1];
    flag = false;
    MAX_INPUT_LENGTH = 30;
    constructor(props) {
        super(props);
        const order = {...queryString.parse(this.props.location.search), current_datetime: queryString.parse(this.props.location.search).datetime};
        console.log(order);
        this.props.onEditOrder(order);
        this.state = {
            city: '',
            size: ''
        }
        console.log(order);
        apiService.checkToken()
            .then(res => {
                console.log('success');
                apiService.getCities()
                    .then(res => {
                        this.props.getCities(res.data.data);
                    });
                apiService.getProducts()
                    .then(res => {
                        this.props.getProducts(res.data.data);

                    })
                apiService.getFreeMasters({
                    option: order.id,
                    size: order.size,
                    datetime: order.datetime,
                    city: order.city_id
                })
                    .then(res => {
                        console.log(res.data.data)
                        this.props.getMasters(res.data.data);
                    })
            })
            .catch(err => {
                console.log('false homepage');
                this.props.history.push(`/login`)
            });

        this.onSubmit = this.onSubmit.bind(this);
        this.onBackToList = this.onBackToList.bind(this);
        this.onGetFreeMasters = this.onGetFreeMasters.bind(this);
        this.onValidClient = this.onValidClient.bind(this);
        this.onValidPrice = this.onValidPrice.bind(this);
    }

    onSubmit(event) {
        console.log('out edit order', this.props.order);
        apiService.editOrder({order: this.props.order})
            .then(res => {
                console.log();
                this.props.history.push(`/orders`)
            })
            .catch(err => {
                this.props.history.push(`/error`)
            })
        event.preventDefault();
    }

    onBackToList(event) {
        this.props.history.push(`/orders`)
    }

    onGetFreeMasters(i) {
        this.inputControl[i] = 1;
        console.log(this.inputControl);
        if (this.inputControl[0] && this.inputControl[1] && this.inputControl[2]) {

            apiService.getFreeMasters({
                option: this.props.order.id,
                size: this.props.order.size,
                datetime: this.props.order.datetime,
                city: this.props.order.city_id
            })
                .then(res => {
                    console.log('length', res.data.data.length);
                    if (res.data.data.length === 0) {
                        this.flag = true;
                        this.props.getMasters([]);
                        console.log('flagggg', this.flag);
                        return;
                    }
                    this.flag = false;
                    this.props.getMasters(res.data.data)
                })
        }
    }

    onValidClient(value) {
        let ValidStr = '';
        for (let i in value) {
            if (ValidStr.length >= this.MAX_INPUT_LENGTH) {
                continue
            }
            else if(value[i].match(/[a-zA-Zа-яА-Я-/.]/ )) {
                ValidStr += value[i];
            }
        }
        return ValidStr
    }

    onValidPrice(value) {
        let ValidStr = '';
        for (let i in value) {
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
        const {writeClient, writeEmail, chooseCity, choosePrice, chooseSize, chooseDatetime, chooseProduct, chooseMaster} = this.props;
        return <div className="container">
            <div className="jumbotron">
                <h1>Форма редактирования заказа</h1>
                <button type="button" className="btn btn-success" onClick={this.onBackToList}>Назад к списку</button>
                <div style={{width: 300}}>
                    <form onSubmit={this.onSubmit}>
                        <label className="col-form-label">Имя клиента</label>
                        <input className="form-control" type="text" placeholder="Имя" required
                               value={this.props.order.client}
                               onChange={(event) => {
                                   writeClient(this.onValidClient(event.target.value));
                               }}
                        />
                        <label className="col-form-label">email</label>
                        <input className="form-control" type="email" placeholder="example@mail.com" required
                               value={this.props.order.email}
                               onChange={(event) => {
                                   writeEmail(event.target.value);
                               }}
                        />
                        <label className="col-form-label">Размер часов</label>
                        <select className="custom-select" required
                                value={this.props.order.product_id}
                                onChange={async (event) => {
                                    for (let i in this.props.products) {
                                        if (Number(this.props.products[i].id) === Number(event.target.value)) {
                                            this.props.chooseSize(String(this.props.products[i].size));
                                        }
                                    }
                                    await chooseProduct(event.target.value);
                                    this.onGetFreeMasters(0);

                                }}
                        >
                            {this.props.products.map((product) => {
                                return (
                                    <option key={product.id} value={product.id} className="table-info">
                                        {product.size} размер
                                    </option>
                                );
                            })}
                        </select>
                        <label className="col-form-label">Стоимость</label>
                        <input className="form-control" type="text" placeholder="Имя" required
                               value={this.props.order.price}
                               onChange={(event) => {
                                   choosePrice(this.onValidPrice(event.target.value));
                               }}
                        />
                        <label className="col-form-label">Город</label>
                        <select className="custom-select" required
                                value={this.props.order.city_id}
                                onChange={async (event) => {
                                    await chooseCity(event.target.value);
                                    this.onGetFreeMasters(1);
                                }}
                        >
                            {this.props.cities.map((city) => {
                                return (
                                    <option key={city.id} value={city.id} className="table-info">
                                        {city.city}
                                    </option>
                                );
                            })}
                        </select>
                        <label className="col-form-label">Действубщая дата и время
                            заказа {moment(this.props.order.current_datetime).format('MMMM Do YYYY, h:mm:ss a')}</label>
                        <input className="form-control" type="datetime-local" min="00:00" max="23:00" step="3600"
                               value={this.props.order.datetime}
                               onChange={async (event) => {
                                   await chooseDatetime(event.target.value);
                                   this.onGetFreeMasters(2);

                               }}
                        />
                        <p></p>
                        <select className="custom-select" required
                                value={this.props.order.master_id}
                                onChange={(event) => {
                                    chooseMaster(event.target.value);
                                }}
                        >
                            {this.props.masters.map((master) => {
                                return (
                                    <option key={master.id} value={master.id} className="table-info">
                                        {master.name} {master.surname} рейтинг {master.rating}
                                    </option>
                                );
                            })}
                        </select>
                        <Message flag={this.flag}/>
                        <p></p>
                        <button type="submit" className="btn btn-success">Изменить заказ</button>
                    </form>

                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return state.editOrderState
};

const mapActionToProps = (dispatch) => {
    return {
        writeClient: bindActionCreators(writeClient, dispatch),
        writeEmail: bindActionCreators(writeEmail, dispatch),
        choosePrice: bindActionCreators(choosePrice, dispatch),
        chooseSize: bindActionCreators(chooseSize, dispatch),
        chooseDatetime: bindActionCreators(chooseDatetime, dispatch),
        chooseCity: bindActionCreators(chooseCity, dispatch),
        chooseProduct: bindActionCreators(chooseProduct, dispatch),
        chooseMaster: bindActionCreators(chooseMaster, dispatch),
        getMasters: bindActionCreators(getMasters, dispatch),
        getProducts: bindActionCreators(getProducts, dispatch),
        getCities: bindActionCreators(getCities, dispatch),
        onEditOrder: bindActionCreators(onEditOrder, dispatch)
    };
};

export default connect(mapStateToProps, mapActionToProps)(EditOrderComponent);