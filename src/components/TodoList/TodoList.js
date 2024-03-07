import React from "react";

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList : [
                {id: 1, text: "go to party"},
                {id: 2, text: "meet friends"},
                {id: 3, text: "have a walk"},
            ]            
        }
    }

    renderLi() {
        const { todoList } = this.state;

        return todoList.map((task) => <li key={task.id}>{task.text}</li>)
    }

    render() {
        return (
        <React.Fragment>
            <h1>Todo list</h1>
            <ul>
                {this.renderLi()}
            </ul>
        </React.Fragment>
        )
    }
}

export default TodoList;

/*

Задача 1

Створити компоненту ToDoList.
Ця компонента має в стейті масив об'єктів, в якому будуть знаходитимь текст задачі та її id.

Це може вигглядати ось таким чином:
[
    {id: 1, text: "go to party"},
    {id: 2, text: "meet friends"},
    {id: 3, text: "have a walk"},
]

Компонента рендерить список <li>, всередині якого один рядок з масиву

Приблизно це може виглядати ось таким чином: 

<ul>
    <li>go to party</li>
    <li>meet friends</li>
    <li>have a walk</li>
</ul>

Задача 2 (***)

В кожній li зробити кнопку, за натисненням на яку цей едемент списку має зникнути (реалізувати видалення завдання)
(тобто оновити стейт таким чином, щоб в масиві з рядками або об'єктами не було того, який пов'язаний з кнопкою)

*/