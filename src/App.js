import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ProductDetails from "./components/productDetails/ProductDetails";
import AboutProduct from "./components/aboutProduct/AboutProduct";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductDetails />
      <AboutProduct />
    </div>
  );
}

export default App;
