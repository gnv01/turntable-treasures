import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { About } from "./pages/About";
import { CartProvider } from "./context/CartContext";
import { ProductDetails } from "./pages/ProductDetails";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
