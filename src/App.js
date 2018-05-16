import React, {Component} from 'react';
import './App.css';
import Header from "./component/header";
import Main from "./component/main";

class App extends Component {
	render() {
		return (
			<div className="app">
				<Header/>
				<Main/>
			</div>
		);
	}
}

export default App;
