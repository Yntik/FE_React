import React from 'react'
import {connect} from 'react-redux'
import queryString from 'query-string'
import {bindActionCreators} from 'redux'

import {apiService} from "../../services/api-service/api-service";

import {writeEmail, writeName, chooseCity, getCities, onEditClient} from '../../store/action/editClientAction'


class EditClientComponent extends React.Component {


    constructor(props) {
        super(props);
        const client = queryString.parse(this.props.location.search);
        this.props.onEditClient(client);
        this.state = {
            city: ''
        }
        apiService.checkToken()
            .then(res => {
                console.log('success');
                apiService.getCities()
                    .then(res => {

                        this.props.getCities(res.data.data);
                    })
            })
            .catch(err => {
                console.log('false homepage');
                this.props.history.push(`/login`)
            })
        this.onSubmit = this.onSubmit.bind(this);
        this.onBackToList = this.onBackToList.bind(this);
    }

    onSubmit(event) {
        apiService.editClient(this.props.client)
            .then(res => {
                console.log(res.data.data);
                this.props.history.push(`/clients`)
            })
            .catch(err => {
                this.props.history.push(`/error`)
            })
        event.preventDefault();
    }

    onBackToList(event) {
        this.props.history.push(`/clients`)
    }

    render() {
        const {writeName, writeEmail, chooseCity} = this.props
        return <div className="container">
            <div className="jumbotron">
                <h1>Форма редактирования клиента</h1>
                <button type="button" className="btn btn-success" onClick={this.onBackToList}>Назад к списку</button>
                <div style={{width: 300}}>
                    <form onSubmit={this.onSubmit}>
                        <label className="col-form-label">Имя</label>
                        <input className="form-control" type="text" placeholder="Имя" required
                               value={this.props.client.name}
                               onChange={(event) => {
                                   writeName(event.target.value);
                               }}
                        />
                        <label className="col-form-label">Электронный адрес</label>
                        <input className="form-control" type="email" placeholder="example@mail.com" required
                               value={this.props.client.email}
                               onChange={(event) => {
                                   writeEmail(event.target.value);
                               }}
                        />
                        <label className="col-form-label">Текущий город {this.state.city}</label>
                        <select className="custom-select" required
                                value={this.props.client.city_id}
                                onChange={(event) => {
                                    chooseCity(event.target.value);
                                }}
                        >
                            {
                                this.props.cities.map((city) => {
                                    return (
                                        <option key={city.id} value={city.id} className="table-info">
                                            {city.city}
                                        </option>
                                    );
                                })}
                        </select>
                        <p></p>
                        <button type="submit" className="btn btn-success">Внести изменения в список клиентов</button>
                    </form>

                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return state.editClientState
}

const mapActionToProps = (dispatch) => {
    return {
        writeName: bindActionCreators(writeName, dispatch),
        writeEmail: bindActionCreators(writeEmail, dispatch),
        chooseCity: bindActionCreators(chooseCity, dispatch),
        getCities: bindActionCreators(getCities, dispatch),
        onEditClient: bindActionCreators(onEditClient, dispatch)
    };
}

export default connect(mapStateToProps, mapActionToProps)(EditClientComponent);