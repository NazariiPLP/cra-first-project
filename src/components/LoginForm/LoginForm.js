import React, { Component } from 'react';
import { LOGIN_SCHEME } from '../../schemas';

const initialState = {
    email: '',
    password: ''
}

class LoginForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            ...initialState,
            isError: null
        }
    }

    changeHandler = ({ target: {value, name} }) => {
        this.setState({
            [name]: value
        });
    }

    submitHandler = (event) => {
        event.preventDefault();
        
        try {
            LOGIN_SCHEME.validateSync(this.state);
                this.setState({
                    isError: null
                })
        } catch(err) {
            this.setState ({
                isError: err
            });
        }
    }


    render() {
        const { email, password, isError } = this.state;

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

                {isError && <p style={{color: 'red', fontSize: '20px'}}>{isError.message}</p>}
            </form>
        );
    }
}

export default LoginForm;
