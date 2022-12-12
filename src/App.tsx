import React from 'react';
import './App.css';
import WindowFrame from "./components/WindowFrame";

function App() {
    return (
        <div className="App">
            <WindowFrame topWindowType={'minMaxSettings'}/>
            <WindowFrame topWindowType={'presentation'}/>
        </div>
    );
}

export default App;
