import React, {Component} from 'react';
import './App.css';
import Navigation from "./header";
import Article from "./component/Article";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation/>
        <h3 className="text-center">Welcome to React application</h3>
        <div className="container">
          <Article/>
        </div>
      </div>
    );
  }
}

export default App;
