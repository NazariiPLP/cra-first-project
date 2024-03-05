import React from "react";

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            // 1. Створити зміну тексту (за аналогією з лампочкою)
            text: true
        }
    }

    // 2. Зробити обробник події кліку на h1 (за аналогією з лампочкою)

    textHandler() {
        this.setState({
            text: !this.state.text
        })
    }

    // тут можуть бути якісь обробники подій

    render() {
        // 3. В залежності від значення стейту, вирахувати що за текст ви показуєте (за аналогією з лампочкою)

        const textForH1 = this.state.text ? 'Hello' : 'Bye';

        return <h1 onClick={() => {this.textHandler()}}>{textForH1} {this.props.name}</h1>
    } 
}

export default Greeting;

