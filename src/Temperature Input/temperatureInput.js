import React from 'react';

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.props.onTemperatureChange(e.target.value);
  };

  render() {
    return (
      <div>
        <h5>Input {this.props.name} temp</h5>
        <input type="text" value={this.props.temp} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default TemperatureInput;