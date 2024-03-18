import React from "react";
import UserList from "./UserList/UserList";

function App() {
    return (
        <>
        <button onClick={() => { window.close() }}>Close page</button>
        <button onClick={() => { window.open('https://github.com/') }}>Open GH</button>
        </>
    )
}

export default App;
