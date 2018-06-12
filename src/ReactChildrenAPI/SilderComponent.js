import React, {Component, Children} from 'react';

import {CSSTransition, CSSTransitionGroup, transit} from "react-css-transition";

const FadeInOut = (props) => (
  <CSSTransition
    {...props}
    defaultStyle={{ opacity: 0 }}
    enterStyle={{ opacity: transit(1.0, 500, "ease-in-out") }}
    leaveStyle={{ opacity: transit(0, 500, "ease-in-out") }}
    activeStyle={{ opacity: 1.0 }}
  />
);

const FadeInOutGroup = (props) => (
  <CSSTransitionGroup {...props}>
    {
      React.Children.map(
        props.children,
        (child) => <FadeInOut>{child}</FadeInOut>,
      )
    }
  </CSSTransitionGroup>
);

class SilderComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 3,
      current: 0,
    };
  }
  componentDidMount() {
    const interval = setInterval(this.showSlide, 500);
  }
  showSlide = () => {
    console.log(this.state);
    const {total, current} = this.state;
    this.setState({
      current: (current + 1 === total) ? 0 : current + 1,
    });
  };
  render() {
    const {children} = this.props;
    const bullet = Array(this.state.total).fill('o');
    bullet[this.state.current] = '*';
    return (
      <div>
        <FadeInOutGroup>
          {Children.toArray(children)[this.state.current]}
        </FadeInOutGroup>
        {bullet}
      </div>
    );
  }
}
export default SilderComponent;