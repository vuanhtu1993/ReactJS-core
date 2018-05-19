import React, {Component} from 'react';

class CountDown extends Component {
    constructor(props) {
        super();
        this.state = {
            distance: 0
        }
    }

    componentDidMount() {
        const countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();
        this.timeID = setInterval(() => {
            const now = new Date().getTime();
            this.setState({distance: countDownDate - now})
        }, 1000);
    }

    componentWillUnmount() {
        this.timeID.clearInterval();
    }

    render() {
        return (
            <div>
                <h4>Welcome count down application</h4>
                <p>Count down to "Sep 5, 2018 15:37:25"</p>
                <p> Days:{Math.floor(this.state.distance / (1000 * 60 * 60 * 24))}</p>
                <p>Hours:{Math.floor((this.state.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}</p>
                <p>Minute: {Math.floor((this.state.distance % (1000 * 60 * 60)) / (1000 * 60))}</p>
                <p>Second: {Math.floor((this.state.distance % (1000 * 60)) / 1000)}</p>
            </div>
        )
    }
}

export default CountDown;