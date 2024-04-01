import { useReducer } from 'react';
import { registrationReducer } from '../../reducers/registrationReducer';
import CONSTANS from '../../constants';
const { ACTIONS } = CONSTANS;

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

const RegistrationForm = () => {
    const [state, dispatch] = useReducer(registrationReducer, initialState);
    const { firstName, lastName, email, password } = state;

    const universalChangeHadler = ({ target: { value, name }}) => {
        dispatch({
            type: ACTIONS.INPUT_CHANGE,
            payload: {
                value, 
                name
            }
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(state); // Потенційно тут міг би бути запит на сервер
    }

    return ( 
        <form onSubmit={submitHandler}>
            <input type='text' name='firstName' placeholder='Type your firstName' value={firstName} onChange={universalChangeHadler}/>
            <input type='text' name='lastName' placeholder='Type your lastName' value={lastName} onChange={universalChangeHadler} />
            <input type='email' name='email' placeholder='Type your email' value={email} onChange={universalChangeHadler} />
            <input type='password' name='password' placeholder='Type your password' value={password} onChange={universalChangeHadler} />
            <button type='submit'>Registration</button>
        </form>
    );
}

export default RegistrationForm;


/*

const [state, dispatch] = useReducer(reducer, initialState);

state - стан (об'єкт)
dispatch - функція, яка зупиняє action

dispatch({ACTION}) -->> reducer -->> змінює state

------------------------------------------

reducer - спеціальна функція, яка прицмаж поточний стейт і дію, яка відбулась (action)
На підстав action reducer змінює state і повертає новий state

reducer: (state, action) => newState

state - об'єкт з поточними значеннями стейту
action - або строчк з дієюб яка відбулась або об'єкт з інформацією про дію, яка відбулась
newState - об'єкт зміненого стану, який повертається з reducer

reducer - чиста (pure) функція:
1. Не містить побічних ефектів (асинхронна робота);
2. детермінована функція. 

const action = {
    type: ВІДПОВІДЬ_З_СЕРВЕРУ,
    payLoad: ЮЗЕРИ
}

------------------------------------------

initialState - об'єкт початкового стейту

initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

*/

/*

Створіть за аналогією форму входу

*/