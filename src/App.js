import React, {Component} from 'react';
import './App.css';
import Navigation from "./header";
import ScrollPosition from "./component/FACC/ScrollPosition";
import LoggedUser from "./component/LoggedUser/LoggedUser";
import LoginButton from "./component/LoggedUser/LoginButton";
import LogoutButton from "./component/LoggedUser/logoutButton";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation/>
        <h3 className="text-center">Welcome to React application</h3>
        <div className="container">
          <LoggedUser>
            {(userInformation) => userInformation ? <LoginButton/> : <LogoutButton/>}
          </LoggedUser>
          <div className="height"/>
          <ScrollPosition>
            {(position) => <div className="position">{position}</div>}
          </ScrollPosition>
          <div className="height"/>
        </div>
      </div>
    );
  }
}

export default App;
