import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppNavbar from "./components/nav";
import Products from "./components/products";
import Cart from "./components/cart";
import Home from "./components/Home";

function App() {
  return (
    <>
      <AppNavbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
