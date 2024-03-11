import React from "react";

/*

Задача

Написати компоненту з формою, що складається з одного інпута (ім'я користувача) і кнопки відправкию.
За натисненням на кнопку відправки форми виникає напис (alert), який вітає користувача тим ім'я, яке було введено в інпут.

*/

class GreetingsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };
  }

  nameChangeHandler = ({target: {value}}) => {
    this.setState({
        name: value
    });
  }

  submitHandler = (event) => {
    event.preventDefault();
    alert(`Hello, ${this.state.name}!`);
  }

  render() {
    const { name } = this.state;

    return (
      <>
        <h1>Greetings Form</h1>
        <form className="form-wrapper" onSubmit={this.submitHandler}>
          <label>
            Type your name
            <input
              type="text"
              onChange={this.nameChangeHandler}
              value={name}
            />
          </label>
          <button type='submit'>Send name</button>
        </form>
      </>
    );
  }
}

export default GreetingsForm;
