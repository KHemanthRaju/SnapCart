import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import { MockAPI } from "./pages/MockMan/MockMan";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" />
        <Route path="/cart" />
        <Route path="/wishlist" />
        <Route path="/login" />
        <Route path="/signup" />
        <Route path="/checkout" />
        <Route path="/profile" />
        <Route path="*" element={<NotFound />} />
        <Route path="/mockman" element={<MockAPI />} />
      </Routes>
    </>
  );
};

export default App;
