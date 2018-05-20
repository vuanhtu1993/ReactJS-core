import React from 'react';
import TemperatureInput from "./temperatureInput";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      temp: "",
    }
  }

  handleChange = (value) => {
    this.setState({
      temp: value,
    });
  };

  toCelius(tempF) {
    return (tempF - 32) * 5 / 9;
  }

  toFahrenheir(tempC) {
    return (tempC * 9 / 5) + 32;
  }

  render() {
    return (
      <div>
        <h3>Temperature conversion</h3>
        <TemperatureInput name="Celsius" temp={this.state.temp} onTemperatureChange={this.handleChange}/>
        <TemperatureInput name="Fahrenheit" temp={this.state.temp} onTemperatureChange={this.handleChange}/>
      </div>
    );
  }
}

export default Calculator;