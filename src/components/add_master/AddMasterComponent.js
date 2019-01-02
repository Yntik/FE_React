import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import styles from '../styles.css'
import {bindActionCreators} from 'redux'

import {apiService} from "../../services/api-service/api-service";

import {writeName, writeSurname, chooseCity, chooseRating, getCities} from '../../store/action/addMasterAction'


class AddMasterComponent extends React.Component {


    constructor(props) {
        super(props);
        apiService.checkToken()
            .then(res => {
                console.log('success');
                apiService.getCities()
                    .then(res => {
                        this.props.getCities(res.data.data);
                        this.props.chooseCity(res.data.data[0].id);
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
        apiService.addMaster(this.props.master)
            .then(res => {
                console.log(res.data.data);
                this.props.history.push(`/masters`)
            })
        event.preventDefault();
    }

    onBackToList(event) {
        this.props.history.push(`/masters`)
    }

    render() {
        const {writeName, writeSurname, chooseCity, chooseRating} = this.props
        return <div className="container">
            <div className="jumbotron">
                <h1>Форма добавления мастера</h1>
                <button type="button" className="btn btn-success" onClick={this.onBackToList}>Назад к списку</button>
                <div style={{width: 300}}>
                    <form onSubmit={this.onSubmit}>
                        <label className="col-form-label">Имя</label>
                        <input className="form-control" type="text" placeholder="Имя"
                               value={this.props.master.name}
                               onChange={(event) => {
                                   writeName(event.target.value);
                               }}
                        />
                        <label className="col-form-label">Фамилия</label>
                        <input className="form-control" type="text" placeholder="Фамилия"
                               value={this.props.master.surname}
                               onChange={(event) => {
                                   writeSurname(event.target.value);
                               }}
                        />
                        <label className="col-form-label">Рейтинг</label>
                        <input className="form-control" type="number" min="0" max="5"
                               value={this.props.master.rating}
                               onChange={(event) => {
                                   chooseRating(event.target.value);
                               }}
                        />
                        <label className="col-form-label">Город</label>
                        <select className="custom-select"
                                onChange={(event) => {
                                    chooseCity(event.target.value);
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
                        <p></p>
                        <button type="submit" className="btn btn-success">Добавить в список мастера</button>
                    </form>

                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return state.addMasterState
}

const mapActionToProps = (dispatch) => {
    return {
        writeName: bindActionCreators(writeName, dispatch),
        writeSurname: bindActionCreators(writeSurname, dispatch),
        chooseCity: bindActionCreators(chooseCity, dispatch),
        chooseRating: bindActionCreators(chooseRating, dispatch),
        getCities: bindActionCreators(getCities, dispatch)
    };
}

export default connect(mapStateToProps, mapActionToProps)(AddMasterComponent);