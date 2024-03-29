import { useState, useCallback } from 'react';

//Задача: є кнопка, підрахуваи кількість натиснень на неї

const Clicker = () => {
    const [clickCount, setClickCount] = useState(0);
    const [inputValue, setInputValue] = useState();

    const clickHandler = useCallback(() => {
        setClickCount(clickCount => clickCount + 1);
    }, []);

    const changeHandler = useCallback(({ target: { value } }) => {
        setInputValue(Number(value));
    }, []);

    const logValueHandler = useCallback(() => {
        let sum = 0;
        for(let i = 0; i <= inputValue; i++){
            sum += i;
        }

        console.log(sum);
        console.log(inputValue);
    }, [inputValue]);

    return (
        <>
            <h1>{clickCount}</h1>
            <button onClick={clickHandler}>Click</button>   
            <input type='text' value={inputValue} onChange={changeHandler} placeholder='Введіть число, для якого потрібно знайти суму (верхню межу)'/>
            <button onClick={logValueHandler}>Розрахувати суму</button>
        </>
    );  
}

export default Clicker;


/*

Використайте хук useCallback для оптимізації.
Огорніть useValueHandler та changeHandler у useCallback.
Використайте вже мемоізовану функцію.


*/