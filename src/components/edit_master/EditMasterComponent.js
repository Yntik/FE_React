import React from 'react'
import {connect} from 'react-redux'
import queryString from 'query-string'
import {bindActionCreators} from 'redux'

import {apiService} from "../../services/api-service/api-service";

import {
    writeName,
    writeSurname,
    chooseCity,
    chooseRating,
    getCities,
    onEditMaster
} from '../../store/action/editMasterAction'


class EditMasterComponent extends React.Component {


    constructor(props) {
        super(props);
        const master = queryString.parse(this.props.location.search);
        this.state = {
            city:''
        }
        apiService.checkToken()
            .then(res => {
                console.log('success');
                apiService.getCities()
                    .then(res => {
                        let cities = [];
                        console.log(res.data.data)
                        for (let i in res.data.data) {
                            if (Number(res.data.data[i].id) === Number(master.city)) {
                                cities.unshift(res.data.data[i]);
                                this.setState({
                                city: res.data.data[i].city
                                })
                                continue;
                            }
                            cities.push(res.data.data[i])
                        }
                        console.log(cities);
                        this.props.getCities(cities);
                    })
            })
            .catch(err => {
                console.log('false homepage');
                this.props.history.push(`/login`)
            })
        this.props.onEditMaster(master);
        this.onSubmit = this.onSubmit.bind(this);
        this.onBackToList = this.onBackToList.bind(this);
    }

    onSubmit(event) {
        apiService.editMaster(this.props.master)
            .then(res => {
                console.log(res.data.data);
                this.props.history.push(`/masters`)
            })
            .catch(err => {
                this.props.history.push(`/error`)
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
                        <input className="form-control" type="text" placeholder="Имя" required
                               value={this.props.master.name}
                               onChange={(event) => {
                                   writeName(event.target.value);
                               }}
                        />
                        <label className="col-form-label">Фамилия</label>
                        <input className="form-control" type="text" placeholder="Фамилия" required
                               value={this.props.master.surname}
                               onChange={(event) => {
                                   writeSurname(event.target.value);
                               }}
                        />
                        <label className="col-form-label">Рейтинг</label>
                        <input className="form-control" type="number" min="0" max="5" required
                               value={this.props.master.rating}
                               onChange={(event) => {
                                   chooseRating(event.target.value);
                               }}
                        />
                        <label className="col-form-label">Текущий город {this.state.city}</label>
                        <select className="custom-select" required
                                value={this.props.master.city}
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
                        <button type="submit" className="btn btn-success">Внести изменения в список мастера</button>
                    </form>

                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return state.editMasterState
}

const mapActionToProps = (dispatch) => {
    return {
        writeName: bindActionCreators(writeName, dispatch),
        writeSurname: bindActionCreators(writeSurname, dispatch),
        chooseCity: bindActionCreators(chooseCity, dispatch),
        chooseRating: bindActionCreators(chooseRating, dispatch),
        getCities: bindActionCreators(getCities, dispatch),
        onEditMaster: bindActionCreators(onEditMaster, dispatch)
    };
}

export default connect(mapStateToProps, mapActionToProps)(EditMasterComponent);