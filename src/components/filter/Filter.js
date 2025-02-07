import React, { Component } from "react";
import { connect } from "react-redux";
import "./Filter.css";
// import { filterProducts, sortProducts } from "../actions/productActions";
export default function Filter() {
  return (
    <div className="filter">
      <div className="order">
        <label>
          Order by
          <select
            className="form-control"
            //   value={this.props.sort}
            //   onChange={(event) => {
            //     this.props.sortProducts(
            //       this.props.filteredProducts,
            //       event.target.value
            //     );
            //   }}
          >
            <option value="">Select</option>
            <option value="lowestprice">Lowest to highest</option>
            <option value="highestprice">Highest to lowest</option>
          </select>
        </label>
      </div>
      <div className="filter-options">
        <label>
          {" "}
          Filter Size
          <select
            className="form-control"
            //value={this.props.size}
            //   onChange={(event) => {
            //     this.props.filterProducts(
            //       this.props.products,
            //       event.target.value
            //     );
            //   }}
          >
            <option value="">ALL</option>
            <option value="x">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
          </select>
        </label>
      </div>
    </div>
  );
}
// const mapStateToProps = (state) => ({
//   products: state.products.items,
//   filteredProducts: state.products.filteredItems,
//   size: state.products.size,
//   sort: state.products.sort,
// });
// export default connect(mapStateToProps, { filterProducts, sortProducts })(
//   Filter
// );
