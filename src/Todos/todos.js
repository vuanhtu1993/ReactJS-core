import React, {Component} from 'react';

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {_id: 1, name: 'Anh Tus'},
                {_id: 2, name: 'Huy'},
                {_id: 3, name: 'The Anh'},
                {_id: 4, name: 'Duong san'},
            ],
        }
    }

    componentWillMount() {
        console.log('componentWillMount');
    }
    componentDidMount() {
        console.log('componentDidMount');
        this.setState({todos: [...this.state.todos, {name: '1234567'}]});
    }
    componentWillReceiveProps(newProps) {
        console.log('componentWillReceiveProps');
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate', newState);
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        //
        console.log('componentWillUpdate', nextState);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', prevState);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    addTodo = (newTodo) => {
        let todos = this.state.todos;
        if (newTodo) {
            todos.push({name: newTodo});
            this.setState({
                todos: todos,
            })
        }
    };

    render() {
        return (
            <div>
                <h4>Welcome to todo app</h4>
                <Input addTodo={this.addTodo} />
                <ol>
                    {this.state.todos.map((todo, i) =>
                        <TodoItem key={i} item={todo}/>
                    )}
                </ol>
            </div>
        )
    }
}

export default Todos;

let TodoItem = (props) => {
    return (
        <li>{props.item.name}</li>
    )
};

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: "",
        }
    }

    changeInput = (event) => {
        this.setState({
            newTodo: event.target.value,
        });
    };

    render() {
        return (
            <div className="addTodo">
                <label htmlFor="addTodo">
                    <input type="text" id="addTodo" onChange={this.changeInput}/>
                </label>
                <button onClick={() => this.props.addTodo(this.state.newTodo)}>Add</button>
            </div>
        )
    }
}