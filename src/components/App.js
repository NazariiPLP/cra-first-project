import React from "react";
import NewCounter from "./NewCounter/NewCounter";
import NewCounterFunction from './NewCounter/NewCounterFunction';


class App extends React.Component {
    constructor(props) {
        super(props);
    
    }

    rerender() {
        this.forceUpdate();
    }
    
    render() {
        return (
        <NewCounterFunction rerender={() => this.rerender} />
        )
    }
}

export default App;