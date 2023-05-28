const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: state.cart.find(({ _id }) => _id === action.payload._id)
          ? state.cart.filter(({ _id }) => action.payload._id !== _id)
          : [...state.cart, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_CART":
      return {
        ...state,
        cart: state.cart.filter(({ _id }) => _id !== action.payload._id),
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.find(({ _id }) => _id === action.payload._id)
          ? state.wishlist.filter(({ _id }) => _id !== action.payload._id)
          : [...state.wishlist, action.payload],
      };
    case "RESET_CART_WISHLIST":
      return {
        ...state,
        cart: [],
        wishlist: [],
        filter: {
          category: [],
          userRating: null,
          sortby: null,
          searchQuery: "",
          price: 2000,
        },
      };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "INCREMENT_CART":
      return {
        ...state,
        cart: state.cart.map((product) =>
          product._id === action.payload._id
            ? { ...product, qty: product.qty + 1 }
            : product
        ),
      };
    default:
      return state;
  }
};
