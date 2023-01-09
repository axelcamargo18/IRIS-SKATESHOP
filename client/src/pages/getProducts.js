import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Productlist extends React.Component {
  state = {
    products: [],
    type: "All",
    filterText: "",
  };

  componentDidMount() {
    axios.get("http://localhost:4000/api/products").then((res) => {
      console.log(res);
      this.setState({ products: res.data });
    });
  }

  myFilter(type) {
    return () => {
      this.setState({ type });
    };
  }

  render() {
    return (
      <>
        <div>
          <div className="product-container">
            <div id="filter-container">
              <h4>Sort By Price: </h4>
              <Link to="/products/LowtoHigh" className="btn btn-dark">
                Low to High
              </Link>
              <Link to="/products/HightoLow" className="btn btn-dark">
                High to Low
              </Link>
              <Link to="/products" className="btn btn-dark">
                Reset
              </Link>
            </div>
          </div>
          <div className="cards-container">
            {this.state.products.map((props) => (
              <section key={props.id} className="card">
                <div className="card-image">
                  <img src={"images/" + props.image} alt={props.image} />
                </div>
                <div className="card-title">
                  <h1>{props.name}</h1>
                </div>
                <div className="card-desc">
                  <hr />
                  <p className="desc">{props.description}</p>
                </div>
                <label>
                  <b>Price: $ </b>
                  {props.price}
                </label>
                <div className="btn-2">Add to cart</div>
              </section>
            ))}
          </div>
        </div>
      </>
    );
  }
}
