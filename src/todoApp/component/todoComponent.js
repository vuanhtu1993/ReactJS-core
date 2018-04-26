import React, { Component } from 'react';
import { connect } from 'react-redux'

class Todo extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		console.log(this.props.todos);
		return(
			<div className="container">
				Hello
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	todos: state
});
export default connect(mapStateToProps)(Todo);