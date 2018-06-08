import React from 'react';
import ArticleDetail from "./ArticleDetail";

class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      phones: [],
    }
  }
  componentDidMount() {
    this.fetchPhones();
  }
  fetchPhones() {
    fetch('http://5ad855aedc1baa0014c60af3.mockapi.io/phones')
      .then(res => res.json())
      .then(data => data.map(phone => phone))
      .then(phones => this.setState({phones}))
  }
  render() {
    const {phones} = this.state;
    return (
      <div>
        <h2>Article</h2>
        {(phones)? <ArticleDetail phones={phones}/> : <div>Null</div>}
      </div>
    );
  }
}
export default Article;
