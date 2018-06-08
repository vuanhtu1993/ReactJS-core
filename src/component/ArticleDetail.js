import React from 'react';
import LoaderHOC from "../HOC/LoaderHOC";

class ArticleDetail extends React.Component {
  render() {
    const {phones} = this.props;
    console.log(phones);
    return (
      <div>
        {phones.map(phone => (
          <li>{phone.id}, {phone.name}</li>
        ))}
      </div>
    );
  }
}

export default LoaderHOC(ArticleDetail);
