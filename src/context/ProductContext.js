import { createContext, useEffect, useReducer } from "react";
import { productReducer } from "../reducer/ProductReducer";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const initialState = { categories: [], products: [] };

  const [productData, dispatch] = useReducer(productReducer, initialState);

  const getProductData = async () => {
    try {
      const categoryData = await (await fetch("/api/categories")).json();
      const productData = await (await fetch("/api/products")).json();
      dispatch({ type: "SET_CATEGORY", payload: categoryData.categories });
      dispatch({ type: "SET_PRODUCT", payload: productData.products });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products: productData.products,
        categories: productData.categories,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
