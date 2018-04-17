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

    render() {
        const status = 'Next player X';
        return (
            <div>
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