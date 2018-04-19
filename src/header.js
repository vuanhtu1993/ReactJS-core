import React, {Component} from 'react';
import logo from './logo.svg';

import {BrowserRouter as Router, Link} from 'react-router-dom';

class Navigation extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-sm navbar-light bg-light">
					<a className="navbar-brand" href="/">
						<img src={logo} className="logo" alt="logo" height={60} width={60}/>
					</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse"
									data-target="#navbarSupportedContent"
									aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<Link className="nav-link" to='/'>Home</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to='/phone'>Phone</Link>
							</li>
						</ul>
						<form className="form-inline my-2 my-lg-0">
							<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
							<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
						</form>
					</div>
				</nav>
			</div>
		)
	}
}

export default Navigation;