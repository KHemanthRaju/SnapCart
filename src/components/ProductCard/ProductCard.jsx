import { useContext, useRef } from "react";
import { CartContext } from "../../context/CartContext";
import { useLocation, useNavigate } from "react-router-dom";
import { AiTwotoneHeart } from "react-icons/ai";

export const ProductCard = ({ product }) => {
  const wishlistTimerId = useRef();
  const cartTimerId = useRef();
  const { addToCart, isProductInCart, isProductInWishlist, toggleWishlist } =
    useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <img
        className="product-image"
        src="product.image"
        alt="pro banner"
        loading="lazy"
        onClick={() => navigate(`/products/$(product._id)`)}
      />
      <button>
        <AiTwotoneHeart />
      </button>
      <span className="product-rating">{product.rating}/5</span>
      <span
        className="product-size"
        style={{ display: product.size !== "" ? "" : "none" }}
      >
        {product.size}
      </span>
      <section className="product-detail">
        <span className="product-name">{product.title}</span>
        <span className="product-price">
          {product.discounted_price}
          <span className="actual-price">{product.price}</span>
        </span>
        <span
          style={{
            color: product.availability ? "green" : "red",
            fontWeight: "800",
          }}
        >
          {product.availability ? "In Stock" : "Out of stock"}
        </span>
        <button className="btn-cart" disabled={!product.availability}>
          Add to Cart
        </button>
        <button className="btn-cart" onClick={() => navigate("/cart")}>
          Go to Cart
        </button>
      </section>
    </>
  );
};
