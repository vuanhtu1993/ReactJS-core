import React from 'react';
import Button from "./button";

class IncrementNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        }
    }

    incrementNumber = (value) => {
        value = this.state.number + value;
        this.setState({
            number: value,
        });
    };

    componentDidUpdate() {

    }

    render() {
        return (
            <div>
                <h3>{this.state.number}</h3>
                <h3>Welcome to Increment number app</h3>
                <Button value={1} incrementNumber={this.incrementNumber}/>
                <Button value={10} incrementNumber={this.incrementNumber}/>
                <Button value={100} incrementNumber={this.incrementNumber}/>
                <Button value={1000} incrementNumber={this.incrementNumber}/>
            </div>
        );
    }
}

export default IncrementNumber;
