import React from 'react';
import PropTypes from 'prop-types';

class LoggedUser extends React.Component {
  state = {
    userInformation: null,
  };
  render() {
    return (
      <div>
        {this.props.children(this.state.userInformation)}
      </div>
    );
  }
}
LoggedUser.propTypes = {
  children: PropTypes.func.isRequired,
};

export default LoggedUser;
