export const productReducer = (prevState, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return { ...prevState, categories: [...action.payload] };
    case "SET_PRODUCT":
      return { ...prevState, products: action.payload };
    default:
      return { ...prevState };
  }
};
