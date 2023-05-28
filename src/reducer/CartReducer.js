export const CartReducer = (state, action) => {
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
    case "DECREMENT_CART":
      return {
        ...state,
        cart: state.cart.map((product) =>
          product._id === action.payload._id && product.qty !== 1
            ? { ...product, qty: product.qty - 1 }
            : product
        ),
      };
    case "FILTER_CATEGORY":
      return {
        ...state,
        filter: {
          ...state.filter,
          category: state.filter.category.find(
            (name) => name === action.payload
          )
            ? state.filter.category.filter((name) => name !== action.payload)
            : [...state.filer.category, action.payload],
        },
      };
    case "FILTER_RATING":
      return {
        ...state,
        filter: { ...state.filter, userRating: action.payload },
      };
    case "FILTER_SORTBY":
      return { ...state, filter: { ...state.filter, sortby: action.payload } };
    case "FILTER_QUERY":
      return {
        ...state,
        filter: { ...state.filter, searchQuery: action.payload },
      };
    case "FILTER_PRICE":
      return { ...state, filter: { ...state.filter, price: action.payload } };

    case "CLEAR_CATEGORY":
      return { ...state, filter: { ...state.filter, category: [] } };

    case "CLEAR_FILTER":
      return {
        ...state,
        filter: {
          ...state.filter,
          category: [],
          userRating: null,
          sortby: null,
          price: 2000,
        },
      };
    default:
      return state;
  }
};
