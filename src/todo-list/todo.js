import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from './reducer/action';

class TodosRedux extends Component {
    render() {
        console.log(this.props.todos);
        return (
            <div>
                <ul>

                </ul>
            </div>
        )
    }
}

const mapToPromps = (state) => {
    return {todos: state};
};

export default connect(mapToPromps, {addTodo})(TodosRedux);