import { useContext } from "react";
import "./PriceCard.css";
import { CartContext } from "../../context/CartContext";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

export const PriceCard = () => {
  const {
    getTotalPrice,
    getTotalDiscount,
    cart,
    clearCart,
    removeMultipleFromCart,
  } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();
  const orderHandler = (orderRes) => {
    success(`Payment Successfull!!`);
    removeMultipleFromCart(cart);
    clearCart();
    navigate("/orders");
  };

  const error = (msg) => {
    return toast.error(msg, {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
  };
  const success = (msg) => {
    return toast.success(msg, {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
  };
  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      error("Failed to load payment gateway");
      return;
    }
    const options = {
      key: "rzp_test_Hxp9VHO0sL1wfr",
      currency: "INR",
      amount: (amount + 249) * 100,
      name: "Magiccart",
      description: "Thanks for purchasing",
      image: "https://ibb.co/y6rmjhR",
      handler: function (response) {
        orderHandler(response);
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <h3>Order details</h3>
      <hr />
      <section>
        <ul className="price-detail-list">
          {cart.length === 0 ? (
            <p>No Product Added</p>
          ) : (
            <ul className="price-detail-list">
              {cart.map(({ title, price, qty }) => (
                <li>
                  <span>
                    {title}(x{qty})
                  </span>
                  <span className="price">{price * qty}</span>
                </li>
              ))}
            </ul>
          )}
          <li>
            <span>Discount</span>
            <span>
              -<span className="price">{getTotalDiscount()}</span>
            </span>
          </li>
          <li>
            <span>Delivery Charges</span>
            <span className="price">{getTotalPrice() === 0 ? "0" : "249"}</span>
          </li>
          <hr />
          <li className="total-price">
            <span>Total amount</span>
            <span className="price">
              {getTotalPrice() === 0 ? "0" : getTotalPrice() + 249}
            </span>
          </li>
        </ul>
      </section>
      <hr />
      <p className="saving-info">
        You will save{" "}
        <span className="discount-price">{getTotalDiscount()}</span> on this
        order
      </p>
      <button
        style={{ display: location?.pathname === "/checkout" ? "" : "none" }}
        className="btn-place-order"
      >
        Place Order
      </button>
      <button
        style={{ display: location?.pathname === "/cart" ? "" : "none" }}
        className="btn-place-order"
        onClick={() => navigate("/checkout")}
      >
        Checkout
      </button>
    </>
  );
};
