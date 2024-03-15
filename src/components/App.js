import React from "react";
import FlexWrapper from "./FlexWrapper/FlexWrapper";

function App() {
    return (
    <FlexWrapper flexDirection="row" justifyContent="center" alignItems="stretch">
        <div>Item1</div>
        <div>Item2</div>
        <div>Item3</div>
    </FlexWrapper>
    )
}

export default App;
