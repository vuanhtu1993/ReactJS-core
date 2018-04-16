import React, {Component} from 'react';
import './App.css';
import Navigation from "./header";
import ShoppingList from "./React-tutorial/shopping-list";

class App extends Component {
    render() {
        return (
            <div className="app">
                <Navigation/>
                <h3 className="text-center">Welcome to React application</h3>
                <div className="container">
                    <ShoppingList name="AnhTus"/>
                </div>
            </div>
        );
    }
}

export default App;
