import React from 'react';

import './loader.css';
const LoaderHOC = (WrapComponent) => {
  return class LoaderHOC extends React.Component {
    render() {
       return this.props.phones.length === 0 ? <div className="loader"> </div> : <WrapComponent {...this.props}/>
    }
  }
};
export default LoaderHOC;
