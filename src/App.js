import React, {Component} from 'react';
import './App.css';
import Navigation from "./header";

class App extends Component {
    render() {
        return (
            <div className="app">
                <Navigation/>
                <h3 className="text-center">Welcome to React application</h3>

            </div>
        );
    }
}

export default App;
