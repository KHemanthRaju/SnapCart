import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { useParams } from "react-router-dom";

export const Product = () => {
  const { productId } = useParams();
  const { getProductDetail } = useContext(ProductContext);
  const product = getProductDetail(productId);
  const {
    _id,
    image,
    title,
    description,
    price,
    discounted_price,
    rating,
    size,
    delivery_time,
    availability,
  } = product;
  return (
    <>
      <div key={_id} className="product-in-container">
        <img src={image} className="product-in-image" alt={description} />
        <div className="product-in-detail">
          <h2 className="product-in-title">{title}</h2>
          <p className="product-in-description">{description}</p>
          <p className="product-in-time">Delivery time: {delivery_time} Days</p>
          <span className="product-in-price">
            {discounted_price}
            <span className="product-in-discounted-price">{price}</span>
          </span>
          <span className="product-in-rating">{rating}/5</span>
          <span className="product-in-size">{size}</span>
          <span
            className="product-in-availability"
            style={{ color: !availability && "red" }}
          >
            {availability ? "In Stock" : "Out of Stock"}
          </span>
          <button>Add to Cart</button>
          <button>Go to Cart</button>
        </div>
      </div>
    </>
  );
};
