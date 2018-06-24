import React from 'react';
import PropTypes from 'prop-types'
class ScrollPosition extends React.Component {
  state = {
    position: 0,
  };
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = () =>{
    const scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop);
    this.setState({
      position: scrollTop,
    });
  };
  render() {
    return (
      <div>{this.props.children(this.state.position)}</div>
    );
  }
}
export default ScrollPosition;

ScrollPosition.propTypes = {
  children: PropTypes.func.isRequired,
};
