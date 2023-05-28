import { createContext, useReducer } from "react";
import { CartReducer } from "../reducer/CartReducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, dispatch] = useReducer(CartReducer, {
    cart: [],
    wishlist: [],
    filter: {
      category: [],
      userRating: null,
      sortby: null,
      searchQuery: "",
      price: 2000,
    },
  });

  console.log(cartData.filter.searchQuery);

  const getCartData = async () => {
    try {
      const token = localStorage.getItem("token");
      const auth = {
        authorization: token,
      };
      const responseCart = await (
        await fetch("/api/user/cart", {
          method: "GET",
          headers: auth,
        })
      ).json();
      const responseWishlist = await (
        await fetch("/api/user/wishlist", {
          method: "GET",
          headers: auth,
        })
      ).json();
      if (responseCart.status === 200) {
        dispatch({
          type: "ADD_TO_CART",
          payload: responseCart.cart,
        });
      }
      if (responseWishlist.status === 200) {
        dispatch({
          type: "ADD_TO_WISHLIST",
          payload: responseWishlist.wishlist,
        });
      }
    } catch (err) {
      console.error(err);
    }

    const addFilterCategory = (category) => {
      dispatch({ type: "FILTER_CATEGORY", payload: category });
    };
  };

  return (
    <CartContext.Provider
      value={{
        cart: cartData.cart,
        wishlist: cartData.wishlist,
        range: cartData.filter.price,
        filter: cartData.filter,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
