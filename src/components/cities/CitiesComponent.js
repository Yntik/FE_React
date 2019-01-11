import React from 'react'

import {apiService} from "../../services/api-service/api-service";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux'
import {getCities} from "../../store/action/citiesAction";


class CitiesComponent extends React.Component {


    constructor(props) {
        super(props);
        apiService.checkToken()
            .then(res => {
                console.log('success');
                apiService.getCities()
                    .then(res => {
                        console.log('yeah',res.data.data)
                        this.props.getCities(res.data.data);
                    })
            })
            .catch(err => {
                this.props.history.push(`/login`)
            })
        this.onAddCity = this.onAddCity.bind(this);
    }

    onAddCity(event) {
        console.log(event)
        this.props.history.push(`/add_city`);
    }


    render() {

        const onEditMaster = (city) => {
            this.props.history.push({
                pathname: '/edit_city',
                search: `?id=${city.id}&name=${city.city}`,
            })
        }
        const onDelete =  async (city) => {
            console.log('egp')
            await apiService.delete({id: city.id, route: 'cities'})
            apiService.getCities()
                .then(res => {
                    this.props.getCities(res.data.data);
                })
        }
        return <div className="container">
            <div className="jumbotron">
                <h1>Список городов</h1>
                <p>Количество городов {this.props.cities.length}</p>
                <button type="button" className="btn btn-success" onClick={this.onAddCity}>Добавить город</button>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Город</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col">Редактировать</th>
                        <th scope="col">Удалить</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.cities.map((city, i) => {
                        return (
                            <tr key={i} className="table-info">
                                <td>{city.city}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><input className="btn btn-warning"
                                    type="button"
                                    value="Редактировать"
                                    onClick={(event) => {
                                        onEditMaster(city)
                                    }}/></td>
                                <td><input className="btn btn-danger"
                                    type="button"
                                    value="Удалить"
                                    onClick={(event) => {
                                        if (window.confirm('Вы действительно хотите удалить запись?')) {
                                            onDelete(city)
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
    return state.citiesState
};

const mapActionToProps = (dispatch) => {
    return {
        getCities: bindActionCreators(getCities, dispatch),
    };
}

export default connect(mapStateToProps,mapActionToProps)(CitiesComponent);
