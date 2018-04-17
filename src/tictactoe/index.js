import React, {Component} from 'react';

class Board extends Component {
    renderSquare(i) {
        return <Square value={i}/>
    }

    render() {
        return (
            <div><br/>
                <div className="status">Status</div>
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
        <button className="square" >{props.value}</button>
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