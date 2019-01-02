import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import styles from '../styles.css'
import {bindActionCreators} from 'redux'

import {apiService} from "../../services/api-service/api-service";

import {
    writeName,
    writeEmail,
    chooseCity,
    chooseProduct,
    getCities,
    chooseDatetime,
    chooseMaster,
    getMasters,
    getProducts,
    chooseSize
} from '../../store/action/addOrderAction'


function MastersList(props) {
    console.log(props);
    if (props.visibility) {

        const list = (
            <div>
                <label className="col-form-label">Дата и время заказа</label>
                <select className="custom-select"
                        onChange={(event) => {
                            for (let i in props.masters) {
                                if (Number(props.masters[i].id) === Number(event.target.value)) {
                                    props.chooseMaster(props.masters[i]);
                                    break;
                                }
                            }
                        }}
                >
                    {props.masters.map((master) => {
                        return (
                            <option key={master.id} value={master.id} className="table-info">
                                {master.name} {master.surname} Рейтинг {master.rating}
                            </option>
                        );
                    })}
                </select>
            </div>
        );
        return list
    }
    else if (props.flag) {
        const message = (
            <h6 className="text-danger">
                Свободных мастеров нет <br/>
                Выберите другие параметры(Дата, время)
            </h6>
        )
        return message;
    }
    else {
        return <div></div>
    }
}


class AddOrderComponent extends React.Component {

    inputControl = [0, 0, 0];
    flag = false;

    constructor(props) {
        super(props);
        apiService.checkToken()
            .then(res => {
                console.log('success');
                apiService.getCities()
                    .then(res => {
                        console.log(res.data.data);
                        this.props.getCities(res.data.data);
                    });
                apiService.getProducts()
                    .then(res => {
                        console.log(res.data.data);
                        this.props.getProducts(res.data.data)
                    })
            })
            .catch(err => {
                console.log('false homepage');
                this.props.history.push(`/login`)
            });

        this.onSubmit = this.onSubmit.bind(this);
        this.onBackToList = this.onBackToList.bind(this);
        this.onGetFreeMasters = this.onGetFreeMasters.bind(this);
    }

    onSubmit(event) {
        apiService.addOrder(this.props.order)
            .then(res => {
                console.log(res.data.data);
                this.props.history.push(`/orders`)
            });
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
                size: this.props.order.size,
                datetime: this.props.order.datetime,
                city: this.props.order.city
            })
                .then(res => {
                    console.log('length', res.data.data.length);
                    if (res.data.data.length === 0) {
                        this.flag = true;
                        this.props.getMasters([]);
                        console.log('flagggg', this.flag);
                        return;
                    }
                    this.props.getMasters(res.data.data)
                })
        }
    }

    render() {
        const {writeName, writeEmail, chooseCity, chooseProduct, chooseDatetime} = this.props;
        return <div className="container">
            <div className="jumbotron">
                <h1>Форма добавления заказа</h1>
                <button type="button" className="btn btn-success" onClick={this.onBackToList}>Назад к списку</button>
                <div style={{width: 300}}>
                    <form onSubmit={this.onSubmit}>
                        <label className="col-form-label">Имя клиента</label>
                        <input className="form-control" type="text" placeholder="Имя"
                               value={this.props.order.name}
                               onChange={(event) => {
                                   writeName(event.target.value);
                               }}
                        />
                        <label className="col-form-label">email</label>
                        <input className="form-control" type="email" placeholder="example@mail.com"
                               value={this.props.order.email}
                               onChange={(event) => {
                                   writeEmail(event.target.value);
                               }}
                        />
                        <label className="col-form-label">Размер и стоимость часов</label>
                        <select className="custom-select"
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
                                        {product.size} размер {product.price} грн
                                    </option>
                                );
                            })}
                        </select>
                        <label className="col-form-label">Город</label>
                        <select className="custom-select"
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
                        <label className="col-form-label">Дата и время заказа</label>
                        <input className="form-control" type="datetime-local" min="00:00" max="23:00" step="3600"
                               onChange={async (event) => {
                                   await chooseDatetime(event.target.value);
                                   this.onGetFreeMasters(2);

                               }}
                        />
                        <MastersList flag={this.flag} visibility={this.props.masters.length}
                                     chooseMaster={this.props.chooseMaster} masters={this.props.masters}

                        />
                        <p></p>
                        <button  type="submit" className="btn btn-success">Добавить в список мастера</button>
                    </form>

                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return state.addOrderState
};

const mapActionToProps = (dispatch) => {
    return {
        writeName: bindActionCreators(writeName, dispatch),
        writeEmail: bindActionCreators(writeEmail, dispatch),
        chooseCity: bindActionCreators(chooseCity, dispatch),
        chooseProduct: bindActionCreators(chooseProduct, dispatch),
        getCities: bindActionCreators(getCities, dispatch),
        chooseDatetime: bindActionCreators(chooseDatetime, dispatch),
        chooseMaster: bindActionCreators(chooseMaster, dispatch),
        getMasters: bindActionCreators(getMasters, dispatch),
        getProducts: bindActionCreators(getProducts, dispatch),
        chooseSize: bindActionCreators(chooseSize, dispatch)
    };
};

export default connect(mapStateToProps, mapActionToProps)(AddOrderComponent);