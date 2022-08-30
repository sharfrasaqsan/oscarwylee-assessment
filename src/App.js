import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ProductDetails from "./components/productDetails/ProductDetails";
import About from "./components/about/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductDetails />
      <About />
    </div>
  );
}

export default App;
