import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import SignUpForm from "./SignUpForm/SignUpForm";

class App extends React.Component {
    constructor(props) {
        super(props);
    
    }
    
    render() {
        return (
        <SignUpForm/>
        )
    }
}

export default App;