import React from 'react';

class ProductCategoryRow extends React.Component {
  render() {
    return (
      <tr className="badge badge-warning">
        <td>{this.props.product.category}</td>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    if (this.props.product.stocked) {
      return (
        <tr>
          <td>{this.props.product.name}</td>
          <td>{this.props.product.price}</td>
        </tr>
      );
    }
    return (
      <tr style={{color: "red"}}>
        <tfld>{this.props.product.name}</tfld>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let row = [];
    let category = null;
    // filter condition
    let filterText = this.props.filterText;
    let isStockOnly = this.props.isStockOnly;

    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (isStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== category) {
        row.push(
          <ProductCategoryRow product={product}/>
        );
      }
      row.push(
        <ProductRow product={product}/>
      );
      category = product.category;
    });
    return (
      <div>
        <table>
          <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
          </tr>
          </thead>
          <tbody>{row}</tbody>
        </table>
      </div>
    );
  }
}

class SearchBar extends React.Component {
  handleInput = (e) => {
    this.props.onChangeInput(e.target.value);
  };

  handleCheckBox = () => {
    this.props.onChangeCheckBox();
  };

  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={this.handleInput}/>
        <p>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={this.handleCheckBox}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

export class FilterableProductTable extends React.Component {
  constructor() {
    super();
    this.state = {
      filterText: '',
      inStockOnly: false
    }
  }

  handleInput = (text) => {
    this.setState({
      filterText: text
    });
  };

  handleCheckBox = () => {
    this.setState((prevState) => ({
      inStockOnly: !prevState.inStockOnly,
    }))
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h3>Filterable Product Table</h3>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onChangeInput={this.handleInput}
          onChangeCheckBox={this.handleCheckBox}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          isStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}


export const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];