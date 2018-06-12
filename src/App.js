import React, {Component} from 'react';
import './App.css';
import Navigation from "./header";
import SilderComponent from "./ReactChildrenAPI/SilderComponent";
import './ReactChildrenAPI/style.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation/>
        <h3 className="text-center">Welcome to React application</h3>
        <div className="container" style={{textAlign: 'center'}}>
          <SilderComponent>
            <img className="imageFullWidth" src="http://kb4images.com/images/image/37185176-image.jpg" alt=""/>
            <img className="imageFullWidth" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg" alt=""/>
            <img className="imageFullWidth" src="http://kb4images.com/images/image/37185176-image.jpg" alt=""/>
          </SilderComponent>
        </div>
      </div>
    );
  }
}
export default App;
