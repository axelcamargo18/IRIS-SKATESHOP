import React from "react";
import axios from "axios";

export default class Productlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      type: "All",
      filterText: "",
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  myFilter(type) {
    return () => {
      this.setState({ type });
    };
  }

  getProducts = () => {
    axios
      .get("https://iris-skateshop.herokuapp.com/api/products")
      .then((res) => {
        console.log(res);
        this.setState({ products: res.data });
      });
  };

  lowToHigh = () => {
    axios
      .get("https://iris-skateshop.herokuapp.com/api/products")
      .then((res) => {
        // console.log(this.state.products);
        console.log(res);
        this.setState({ products: res.data });
      });
  };

  highToLow = () => {
    axios
      .get("https://iris-skateshop.herokuapp.com/api/products")
      .then((res) => {
        console.log(res);
        this.setState({ products: res.data });
      });
  };

  render() {
    return (
      <>
        <div>
          <div className="product-container">
            <div id="filter-container">
              <h4>Sort By Price: </h4>

              <button onClick={this.lowToHigh} className="btn btn-dark">
                Low to High
              </button>

              <button onClick={this.highToLow} className="btn btn-dark">
                High to Low
              </button>
              <button onClick={this.getProducts} className="btn btn-dark">
                Reset
              </button>
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
