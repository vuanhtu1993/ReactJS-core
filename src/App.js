import React, {Component} from 'react';
import './App.css';
import Navigation from "./header";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./assignment1/home";
import CellPhone from "./assignment1/cellPhone";

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Navigation/>
					<div className="app">
						<h3 className="text-center">Welcome to React application</h3>
					</div>
					<Switch>
						<Route exact path='/' component={Home}/>
						<Route path='/phone' component={CellPhone}/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
