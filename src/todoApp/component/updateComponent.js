import React, { Component } from 'react';

class UpdateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: this.props.updatingTodo.text,
    };
  }

  handleChangeText = () => {
    this.setState({ todoText: this.refs.todoText.value });
  };

  render() {
    return (
      <div>
        <h5>Update todo</h5>
        <label htmlFor="formUpdate">
          {' '}
          Update form
          <input
            type="text"
            id="formUpdate"
            value={this.state.todoText}
            ref="todoText"
            onChange={this.handleChangeText}
          />
        </label>
        <button
          className="btn btn-outline-info"
          onClick={() => this.props.handleUpdate(this.state.todoText)}
        >
          Update
        </button>
      </div>
    );
  }
}

export default UpdateTodo;
