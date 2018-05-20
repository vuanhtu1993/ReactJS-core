import React from 'react';

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: ""
    }
  }

  render() {
    return (
      <div>
        <h5>Input {this.props.name} temp</h5>
        <input type="text" value={this.props.temp} onChange={(e) => this.props.handleChange(e.target.value)}/>
      </div>
    );
  }
}

export default TemperatureInput;