import React, {Component} from 'react';

class Board extends Component {
    constructor() {
        super();
        this.state = {
            squares: Array(9).fill(null),
            isNext: true,
        }
    }
    handleClick(i) {
        // copy ra một array square khác
        const squares = this.state.squares.slice();
        // gán giá trị
        squares[i] = (this.state.isNext === true) ? 'X' : 'O';
        // gán lại vào state
        this.setState({squares: squares, isNext: !this.state.isNext});
        console.log(squares);
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]}
        onclickSquare={() => this.handleClick(i)} />
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    render() {
        const winner = this.calculateWinner(this.state.squares);
        let status = '';
        if (winner) {
            status = `Winner player is ${winner}`;
        } else {
            status = `Next player ${(this.state.isNext === true) ? 'X' : 'O'}`
        }
        return (
            <div><br/>
                <div className="status">{status}</div>
                <div className='board-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

function Square(props) {
    return (
        <button className="square" onClick={props.onclickSquare}>{props.value}</button>
    )
}

class Game extends Component {
    render() {
        return (
            <div className="game">
                <h5>Welcome to TicTacToe game</h5>
                <br/>
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}


export default Game;