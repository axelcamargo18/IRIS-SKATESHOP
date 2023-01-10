import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

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
      .get("http://localhost:4000/api/products")
      // axios
      //   .get("https://iris-skateshop.herokuapp.com/api/products")
      .then((res) => {
        console.log(res);
        this.setState({ products: res.data });
      });
  };

  lowToHigh = () => {
    axios
      .get("http://localhost:4000/api/products/lowToHigh")
      // axios
      //   .get("https://iris-skateshop.herokuapp.com/api/products/lowToHigh")
      .then((res) => {
        console.log(res);
        this.setState({ products: res.data });
      });
  };

  highToLow = () => {
    axios
      .get("http://localhost:4000/api/products/highToLow")
      // axios
      //   .get("https://iris-skateshop.herokuapp.com/api/products/highToLow")
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
            <h4>Sort By Price: </h4>
            <div id="filter-container">
              <Button
                onClick={this.lowToHigh}
                variant="outline-dark"
                className="mx-1"
              >
                Low to High
              </Button>

              <Button
                onClick={this.highToLow}
                variant="outline-dark"
                className="mx-1"
              >
                High to Low
              </Button>

              <Button
                onClick={this.getProducts}
                variant="outline-dark"
                className="mx-1"
              >
                High to Low
              </Button>
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
