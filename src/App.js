import React, {Component} from 'react';
import './App.css';
import Navigation from "./header";
// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Component
import loginComponent from "./component/loginComponent";

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<div className="app">
						<Navigation/>
						<h3 className="text-center">Welcome to React application</h3>
					</div>
					<Switch>
						<Route path='/login' component={loginComponent}/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
