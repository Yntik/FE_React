import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {apiService} from "../../services/api-service/api-service";

import {writeName} from '../../store/action/addCityAction'


class AddCityComponent extends React.Component {

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
        apiService.addCity({name: this.props.city.name})
            .then(res => {
                this.props.history.push(`/cities`)
            })
            .catch(err => {
                this.props.history.push(`/error`)
            })
        event.preventDefault();
    }

    onBackToList(event) {
        this.props.history.push(`/cities`)
    }

    onValid(value) {
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

    render() {
        const {writeName} = this.props;
        return <div className="container">
            <div className="jumbotron">
                <h1>Форма добавления города</h1>
                <button type="button" className="btn btn-success" onClick={this.onBackToList}>Назад к списку</button>
                <div style={{width: 300}}>
                    <form onSubmit={this.onSubmit}>
                        <label className="col-form-label">Название нового города</label>
                        <input className="form-control" type="text" placeholder="Название нового города" required
                               value={this.props.city.name}
                               onChange={(event) => {
                                   writeName(this.onValid(event.target.value));
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