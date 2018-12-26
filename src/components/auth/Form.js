import React from 'react'
import ReactDOM from 'react-dom'


export class FormComponent extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <form onSubmit={this.props.onSubmit}>
                <p><label> Login: <input type="text"
                                                    onChange={this.props.onLoginChange}/></label></p>
                <p><label> Password: <input type="password"
                                                     onChange={this.props.onPasswordChange}/></label></p>
                {!this.props.validation ? <div>
                    <p>Логин или пароль не верный</p>
                    <p>Попробуйте еще раз</p>
                </div>: null}

                <p><input type="submit" value="Submit" /></p>
            </form>
        )
    }
}

