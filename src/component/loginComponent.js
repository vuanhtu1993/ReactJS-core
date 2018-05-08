import React, {Component} from 'react';
import './source/loginForm.css';
import {connect} from 'react-redux';
import {login, url, header} from "../Redux/actions/action";
import axios from 'axios';

class loginComponent extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
		}
	}

	handleChange = (event) => {
		this.setState({[event.target.id]: event.target.value});
		console.log(event.target.value);
	};

	handleSubmit = () => {
		console.log('xxxx');
		this.props.login({
			"dataUser": {
				"email": "test4@gmail.com",
				"username": this.state.username,
				"password": this.state.password,
			}
		})
	};

	render() {
		return (
			<div className="loginForm">
				<div className="form-group">
					<label htmlFor="formGroupExampleInput">Username</label>
					<input type="text"
								 className="form-control"
								 id="username"
								 placeholder="Username"
								 onChange={this.handleChange}
								 value={this.state.username}
								 autoComplete="off"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="formGroupExampleInput2">Password</label>
					<input type="password"
								 className="form-control"
								 id="password"
								 placeholder="Password"
								 onChange={this.handleChange}
								 value={this.state.password}
								 autoComplete="new-password"
					/>
				</div>
				<button type="submit"
								className="btn btn-outline-info float-right"
								onClick={this.handleSubmit}>Submit
				</button>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	login: user_data => {
		axios.post(`${url}users`, user_data, header).then((res) => {
			let user = res.data;
			localStorage.setItem('Auth', JSON.stringify(user));
			dispatch(login(user_data));
		}).catch((err) => console.log(err));
	},
});

export default connect(null, mapDispatchToProps)(loginComponent);