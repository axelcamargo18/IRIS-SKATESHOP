import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";

import Home from "./pages/Home";
import Product from "./pages/getProducts";
import Contact from "./pages/Contact";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import HighToLow from "./components/highToLow";
import LowToHigh from "./components/lowToHigh";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/products/HighToLow" element={<HighToLow />} />
            <Route path="/products/LowToHigh" element={<LowToHigh />} />
          </Routes>
          <Footer sticky="bottom" />
        </Container>
      </Router>
    </>
  );
}

export default App;
