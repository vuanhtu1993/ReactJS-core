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
        <td>{this.props.product.name}</td>
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
    this.props.products.forEach((product) => {
      if (product.category !== category) {
        row.push(
          <ProductCategoryRow product={product}/>
        )
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
          <tbody>
          {row}
          </tbody>
        </table>
      </div>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText} />
        <p>
          <input
            type="checkbox"
            checked={inStockOnly} />
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

  render() {
    return (
      <div>
        <h3>Filterable Product Table</h3>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
        <ProductTable products={this.props.products}/>
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