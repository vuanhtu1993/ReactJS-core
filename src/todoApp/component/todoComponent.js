import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, delTodo, updateTodo } from '../todoAction';
import UpdateTodo from './updateComponent';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      updatingTodo: {},
    };
  }

  handleChangeInput = () => {
    this.setState({ input: this.refs.input.value });
  };

  handleAddTodo = () => {
    console.log(this.state.input);
    this.props.addTodo(this.state.input);
  };

  handleDelTodo(id) {
    console.log('Delete todo');
    this.props.delTodo(id);
  }

  handleUpdate = (text) => {
    const newTodo = Object.assign({}, this.state.updatingTodo);
    newTodo.text = text;
    console.log(newTodo);
    this.props.updateTodo(newTodo);
  };

  render() {
    const { todos } = this.props;
    console.log(todos);
    console.log(this.state.updatingTodo);
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
        <button className="btn btn-outline-danger" onClick={this.handleAddTodo}>
          ADD
        </button>
        {this.state.updatingTodo.id ? (
          <UpdateTodo
            updatingTodo={this.state.updatingTodo}
            handleUpdate={this.handleUpdate}
          />
        ) : null}
        <p>List todo:</p>
        <table className="table table-bordered">
          <thead>
            <tr>
              <td>Index</td>
              <td>Name</td>
              <td>Done</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td>{todo.id}</td>
                <td onClick={() => this.setState({ updatingTodo: todo })}>
                  {todo.text}
                </td>
                <td>
                  <button className="btn btn-outline-info">Done</button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => this.handleDelTodo(todo.id)}
                  >
                    Del
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state,
});
const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
  delTodo: id => dispatch(delTodo(id)),
  updateTodo: newTodo => dispatch(updateTodo(newTodo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
