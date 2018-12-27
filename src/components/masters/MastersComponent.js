import React from 'react'
import ReactDOM from 'react-dom'

import {apiService} from "../../services/api-service/api-service";


function UserItem(props){
    const user = props.user
    //Правильно! Здесь не нужно указывать ключ:
    return (<li>{user.name}, {user.surname}
        <button type="button" className="btn btn-primary">Primary</button> </li>)
}


function UserList(props){
    const users = props.users;
    const items = users.map((user) => {
        //Правильно! Здесь должен быть указан ключ:
        return <UserItem key={user.id} user={user}/>;
    });
    return (

        <ul>Имя, Фамилия, Клик{items}</ul>);
}


export class MastersComponent extends React.Component {


    constructor(props) {
        super(props);
        apiService.checkToken()
            .then(res => {
                console.log('success');
            })
            .catch(err => {
                this.props.history.push(`/login`)
            })
        this.state = {
            masters: []
        }
        apiService.getMasters()
            .then(res => {
                console.log(res.data.data);
                this.setState({masters: res.data.data})
            })
    }

    render() {
        return <div>
            <h1>HomePageComponent</h1>
            <UserList users={this.state.masters}/>
        </div>
    }
}

