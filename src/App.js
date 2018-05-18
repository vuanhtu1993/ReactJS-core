import React, {Component} from 'react';
import './App.css';
import Navigation from "./header";
import Game from "./tictactoe/index";
import CountDown from "./countdown/countdown";
import Todos from "./Todos/todos";
import IncrementNumber from "./IncrementNumber";

class App extends Component {
    render() {
        return (
            <div className="app">
                <Navigation/>
                <h3 className="text-center">Welcome to React application</h3>
                <div className="container">
                    <Game/>
                    <CountDown/>
                    <Todos/>
                    <IncrementNumber/>
                </div>
            </div>
        );
    }
}

export default App;
