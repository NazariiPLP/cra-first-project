import React, { Component } from 'react';
import * as yup from 'yup';

const initialState = {
    email: '',
    password: ''
}

const LOGIN_SCHEME = yup.object ({
    email: yup.string().required().email(),
    password: yup.string().required().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)
})

class LoginForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            ...initialState
        }
    }

    changeHandler = ({ target: {value, name} }) => {
        this.setState({
            [name]: value
        });
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(LOGIN_SCHEME.isValidSync(this.state)); // Потенційно, тут можна робити запит на сервер
    }


    render() {
        const { email, phoneNumber, password } = this.state;

        return (
            <form onSubmit={this.submitHandler}>
                <input
                type='text'
                value={email}
                placeholder='Type your email'
                name='email'
                onChange={this.changeHandler}
                />
                <input 
                type='text'
                value={password}
                placeholder='Type your password'
                name='password'
                onChange={this.changeHandler}
                />
                <button>Log in</button>
            </form>
        );
    }
}

export default LoginForm;
