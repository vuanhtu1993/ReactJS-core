import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  handleChangeInput = () => {
    this.setState({ input: this.refs.input.value });
  };

  handleSubmit = () => {
    console.log(this.state.input);
  };

  render() {
    const { todos } = this.props;
    return (
      <div className="container">
        Welcome to app
        <p>Add todos:</p>
        <input
          type="text"
          ref="input"
          onChange={this.handleChangeInput}
          value={this.state.input}
        />
        <button className="btn btn-outline-danger" onClick={this.handleSubmit}>
          ADD
        </button>
        <p>List todo:</p>
        <ul>{todos.map(todo => <li>{todo.text}</li>)}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state,
});
export default connect(mapStateToProps)(Todo);
