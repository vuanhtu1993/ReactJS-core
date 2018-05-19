import React, {Component} from 'react';
import Clock from "./clock";

class CountDown extends Component {
    constructor(props) {
        super();
        this.state = {
            distance: 0,
            time: "",
            isShowClock: false
        }
    }

    componentDidMount() {
    }

    countDown = () => {
        if (this.state.time === "") {
            return alert('Fill in the time to count down first !');
        }
        const countDownDate = new Date(this.state.time).getTime();
        this.timeID = setInterval(() => {
            const now = new Date().getTime();
            this.setState({distance: countDownDate - now})
        }, 1000);
    };

    handleChange = (e) => {
        clearInterval(this.timeID);
        this.setState({
            time: e.target.value,
            isShowClock: true
        });
    };

    handleReset = () => {
        this.setState({
            time: "",
            isShowClock: false
        });
    };

    componentWillUnmount() {

    }

    render() {
        const clock = <Clock distance={this.state.distance} />;
        return (
            <div>
                <h4>Welcome count down application</h4>
                <p>Count down to "Sep 5, 2018 15:37:25"</p>
                <input type="text" value={this.state.time} onChange={this.handleChange}/>
                <button onClick={this.countDown}>count down</button>
                {this.state.isShowClock && clock}
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

export default CountDown;