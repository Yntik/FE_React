import React from 'react'

import queryString from 'query-string'


import {apiService} from "../../services/api-service/api-service";



export class EditCityComponent extends React.Component {

    MAX_INPUT_LENGTH = 30;
    constructor(props) {
        super(props);
        const city = queryString.parse(this.props.location.search);
        this.state = {
                id: city.id,
                name: city.name
        };
        apiService.checkToken()
            .then(res => {
                console.log('success');
            })
            .catch(err => {
                console.log('false homepage');
                this.props.history.push(`/login`)
            })
        this.onSubmit = this.onSubmit.bind(this);
        this.onBackToList = this.onBackToList.bind(this);
        this.onValid = this.onValid.bind(this);
    }


    onSubmit(event) {
        apiService.editCity({name: this.state.name, id: this.state.id})
            .then(res => {
                console.log(res.data.data);
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
        return <div className="container">
            <div className="jumbotron">
                <h1>Форма добавления мастера</h1>
                <button type="button" className="btn btn-success" onClick={this.onBackToList}>Назад к списку</button>
                <div style={{width: 300}}>
                    <form onSubmit={this.onSubmit}>
                        <label className="col-form-label">Название города</label>
                        <input className="form-control" type="text" placeholder="Название города" required
                               value={this.state.name}
                               onChange={(event) => {
                                   this.setState({name: this.onValid(event.target.value)
                                       });
                               }}
                        />
                        <button type="submit" className="btn btn-success">Внести изменения в список городов</button>
                    </form>

                </div>
            </div>
        </div>
    }
}

