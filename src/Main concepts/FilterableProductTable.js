import React, { Component } from "react";
import { Search } from "semantic-ui-react";

class ProductCategoryRow extends Component {
  render() {
    return (
      <tr>
        <th colSpan="2">{this.props.category}</th>
      </tr>
    );
  }
}

class ProductRow extends Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: "red" }}>{product.name}</span>
    );

    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends Component {
  render() {
    const rows = [];
    const filterText = this.props.filterText.toLowerCase();
    const inStock = this.props.inStock;
    let lastCategory = null;

    this.props.products.forEach(product => {
      if (inStock && !product.stocked) {
        return;
      }
      if (product.name.toLowerCase().indexOf(filterText) === -1) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            key={product.category}
            category={product.category}
          />
        );
      }
      rows.push(<ProductRow key={product.id} product={product} />);
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.handleFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    this.props.handleInStockChange(e.target.checked);
  }

  render() {
    return (
      <div>
        <Search
          value={this.props.filterText}
          onSearchChange={this.handleFilterTextChange}
          placeholder="Search..."
        />
        <br />
        <label>
          <input
            checked={this.props.inStock}
            type="checkbox"
            onChange={this.handleInStockChange}
          />
          &nbsp;&nbsp; Only show products in stock
        </label>
        <br />
        <br />
      </div>
    );
  }
}

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      inStock: false
    };
  }

  handleFilterTextChange(filterText) {
    this.setState({ filterText });
  }

  handleInStockChange(inStock) {
    this.setState({ inStock });
  }

  render() {
    const PRODUCTS = [
      {
        id: 0,
        category: "Sporting Goods",
        price: "$49.99",
        stocked: true,
        name: "Football"
      },
      {
        id: 1,
        category: "Sporting Goods",
        price: "$9.99",
        stocked: true,
        name: "Baseball"
      },
      {
        id: 2,
        category: "Sporting Goods",
        price: "$29.99",
        stocked: false,
        name: "Basketball"
      },
      {
        id: 3,
        category: "Electronics",
        price: "$99.99",
        stocked: true,
        name: "iPod Touch"
      },
      {
        id: 4,
        category: "Electronics",
        price: "$399.99",
        stocked: false,
        name: "iPhone 5"
      },
      {
        id: 5,
        category: "Electronics",
        price: "$199.99",
        stocked: true,
        name: "Nexus 7"
      }
    ];

    return (
      <div className="filterable-product-table">
        <SearchBar
          filterText={this.state.filterText}
          inStock={this.state.inStock}
          handleFilterTextChange={this.handleFilterTextChange.bind(this)}
          handleInStockChange={this.handleInStockChange.bind(this)}
        />
        <ProductTable
          products={PRODUCTS}
          filterText={this.state.filterText}
          inStock={this.state.inStock}
        />
      </div>
    );
  }
}
