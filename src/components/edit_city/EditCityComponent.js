import React from 'react'

import queryString from 'query-string'


import {apiService} from "../../services/api-service/api-service";



export class EditCityComponent extends React.Component {


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
    }


    onSubmit(event) {
        apiService.editCity({name: this.state.name, id: this.state.id})
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
        return <div className="container">
            <div className="jumbotron">
                <h1>Форма добавления мастера</h1>
                <button type="button" className="btn btn-success" onClick={this.onBackToList}>Назад к списку</button>
                <div style={{width: 300}}>
                    <form onSubmit={this.onSubmit}>
                        <label className="col-form-label">Название города</label>
                        <input className="form-control" type="text" placeholder="Название города"
                               value={this.state.name}
                               onChange={(event) => {
                                   console.log(event.target.value);
                                   this.setState({name: event.target.value
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

