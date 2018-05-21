import React from 'react';
import TemperatureInput from "./temperatureInput";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      temp: "",
      scale: ""
    }
  }

  handleChangeCelius = (value) => {
    this.setState({
      temp: value,
      scale: "C"
    });
  };

  handleChangeFahrenit = (value) => {
    this.setState({
      temp: value,
      scale: "F"
    });
  };

  toCelius(tempF) {
    return (tempF - 32) * 5 / 9;
  }

  toFahrenheir(tempC) {
    return (tempC * 9 / 5) + 32;
  }

  render() {
    const temp = this.state.temp;
    const scale = this.state.scale;
    const tempC = scale === "F" ? this.toCelius(temp) : temp;
    const tempF = scale === "C" ? this.toFahrenheir(temp) : temp;
    console.log(this.state);
    return (
      <div>
        <h3>Temperature conversion</h3>
        <TemperatureInput name="Celsius" temp={tempC} onTemperatureChange={this.handleChangeCelius}/>
        <TemperatureInput name="Fahrenheit" temp={tempF} onTemperatureChange={this.handleChangeFahrenit}/>
      </div>
    );
  }
}

export default Calculator;