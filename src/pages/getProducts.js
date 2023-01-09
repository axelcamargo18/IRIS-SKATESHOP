import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Productlist extends React.Component {
  state = {
    products: [],
    type: "All",
    filterText: "",
  };

  //UseState is a react hook that lets you set some state to react component.

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

  onChange(e) {
    this.setState({ filterText: e.target.value });
  }

  normalizeString(str) {
    return str.toLowerCase().replace(/\s/g, "");
  }

  render() {
    return (
      <>
        <div>
          <div className="product-container">
            <div className="search-container">
              <h3 className="searchLabel">Search By Name:</h3>
              <div>
                <input
                  className="searchBar"
                  type="text"
                  value={this.state.filterText}
                  onChange={(e) => this.onChange(e)}
                ></input>
              </div>
            </div>
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
            {
              // .filter((props) => {
              //   if (this.state.filterText === "") {
              //     return true;
              //   } else {
              //     return this.normalizeString(props.prodName).includes(
              //       this.normalizeString(this.state.filterText)
              //     );
              //   }
              // })

              this.state.products.map((props) => (
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
              ))
            }
          </div>
        </div>
      </>
    );
  }
}
