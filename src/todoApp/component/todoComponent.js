import React, {Component} from 'react';
import {connect} from 'react-redux'

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ''
		}
	}

	handleChangeInput = (e) => {
		this.setState({input: e.target.value})
	};
	
	render() {
		let todos = this.props.todos;
		return (
			<div className="container">
				Welcome to app
				<p>Add todos:</p>
				<input
					type="text"
					onChange={this.handleChangeInput}
					value={this.state.input}/>
				<button className="btn btn-outline-danger">ADD</button>
				<p>List todo:</p>
				<ul>
					{todos.map((todo) =>
						<li>
							{todo.text}
						</li>)}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	todos: state
});
export default connect(mapStateToProps)(Todo);