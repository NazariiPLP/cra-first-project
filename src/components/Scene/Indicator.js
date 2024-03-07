/*

Задача:

Зробити ФУНКЦІОНАЛЬНУ компоненту, яка рендерить невеликий div 200х200,
рендерить там текст, але текст, який ця компонента має рендерити, вона отримує через пропси

*/

import './style.css'

function Indicator(props) {
    return (
    <div className="indicator">{props.divText}</div>
    )
}

export default Indicator;