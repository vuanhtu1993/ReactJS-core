import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import {Home, Roster, Schedule} from "./childComponent";

class Main extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<Switch>
				  <Route exact path="/" component={Home} />
				  <Route path="/roster" component={Roster} />
				  <Route path="/schedule" component={Schedule} />
				</Switch>
			</div>
		)
	}
}
export default Main;