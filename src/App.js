import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import { MockAPI } from "./pages/MockMan/MockMan";
import HomePage from "./pages/HomePage/HomePage";
import { ProductListing } from "./pages/ProductListing/ProductListing";
import { Product } from "./pages/Product/Product";
import { Header } from "./components/HeaderComponent/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/cart" />
        <Route path="/wishlist" />
        <Route path="/login" />
        <Route path="/signup" />
        <Route path="/checkout" />
        <Route path="/profile" />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/mockman" element={<MockAPI />} />
      </Routes>
    </>
  );
};

export default App;
