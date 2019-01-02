import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {apiService} from "../../services/api-service/api-service";

import {writeName} from '../../store/action/addCityAction'


class AddCityComponent extends React.Component {


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
        console.log('new city = ', this.props.city.name);
        apiService.addCity({name: this.props.city.name})
            .then(res => {
                console.log(res.data.data);
                this.props.history.push(`/cities`)
            })
        event.preventDefault();
    }

    onBackToList(event) {
        this.props.history.push(`/cities`)
    }

    render() {
        const {writeName} = this.props;
        return <div className="container">
            <div className="jumbotron">
                <h1>Форма добавления города</h1>
                <button type="button" className="btn btn-success" onClick={this.onBackToList}>Назад к списку</button>
                <div style={{width: 300}}>
                    <form onSubmit={this.onSubmit}>
                        <label className="col-form-label">Название нового города</label>
                        <input className="form-control" type="text" placeholder="Название нового города"
                               value={this.props.city.name}
                               onChange={(event) => {
                                   writeName(event.target.value);
                               }}
                        />
                        <button type="submit" className="btn btn-success">Добавить в список городов</button>
                    </form>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return state.addCityState
}

const mapActionToProps = (dispatch) => {
    return {
        writeName: bindActionCreators(writeName, dispatch),
    };
}

export default connect(mapStateToProps, mapActionToProps)(AddCityComponent);