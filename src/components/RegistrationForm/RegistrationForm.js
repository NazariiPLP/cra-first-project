import React, { useState, useReducer } from 'react';

function reducer(state, action) {
    switch(action.type) {
        case 'CLICK_INCREMENT': {
            return {
                ...state, 
                count: state.count + 1
            };
        }
        case 'CLICK_DECREMENT': {
            return {
                ...state,
                count: state.count - 1
            }
        }
        case 'INPUT_CHANGE': {
            // 1. Розбираємось з атрибутом name
            // 2. Коли ми розібрались, в який саме стейт має зайти аттрибут - кладемо у відповідний стейт значення
            break;
        }
        default: {
            return state;
        }
    }
}

const initialState = {
    count: 0, 
    // тут ще може бути багато інших полів
}

const Clicker = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const clickIncrementHandler = () => {
        dispatch({
            type: 'CLICK_INCREMENT'
        }); // В dispatch передається об'єкт action
    }

    const clickDecrementHandler = () => {
        dispatch({
            type: 'CLICK_DECREMENT'
        })
    }

    return (
        <>
            <h1>{state.count}</h1>   
            <button onClick={clickIncrementHandler}>Increment</button>
            <button onClick={clickDecrementHandler}>Decrement</button>
        </>
    );
}

/*

Задача

Додати декремент лічильника до функціоналу

1. Пропишіть відповідний case у редьюсері
2. Зробіть обробник події натиснення (onClick) кнопки декременту
3. Створіть у верстці кнопку і прикрутіть до неї обробник події, який ви зробили на попередньому кроці

*/



// const RegistrationForm = () => {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const universalChangeHadler = ({target: {value, name}}) => {
//         switch(name) {
//             case 'firstName': {
//                 setFirstName(value);
//                 break;
//             }
//             case 'lastName': {
//                 setLastName(value);
//                 break;
//             }
//             case 'email': {
//                 setEmail(value);
//                 break;
//             }
//             case 'password': {
//                 setPassword(value);
//                 break;
//             }
//             default: {
//                 break;
//             }
//         }
//     }

//     return (
//         <form>
//             <input type='text' name='firstName' placeholder='Type your firstName' value={firstName} onChange={universalChangeHadler}/>
//             <input type='text' name='lastName' placeholder='Type your lastName' value={lastName} onChange={universalChangeHadler} />
//             <input type='email' name='email' placeholder='Type your email' value={email} onChange={universalChangeHadler} />
//             <input type='password' name='password' placeholder='Type your password' value={password} onChange={universalChangeHadler} />
//         </form>
//     );
// }

export default Clicker;


/*

const [state, dispatch] = useReducer(reducer, initialState);

state - стан (об'єкт)
dispatch - функція, яка зупиняє action

dispatch(ACTION_TYPE) -->> reducer -->> змінює state

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
