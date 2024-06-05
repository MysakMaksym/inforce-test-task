import "../styles/App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../actions/products";
import Product from "./Product.js";

function App() {
  const products = useSelector((state) => state.products.value);
  const dispatch = useDispatch();
  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="App">
      <div className="products">
        {products.map((product, i) => (
          <Product key={i} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
