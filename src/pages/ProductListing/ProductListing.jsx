import { useContext, useState } from "react";
import "../ProductListing/ProductListing.css";
import { ProductContext } from "../../context/ProductContext";
import { CartContext } from "../../context/CartContext";
import Filters from "../../components/FilterComponent/Filters";

export const ProductListing = () => {
  const { products } = useContext(ProductContext);
  const { filter } = useContext(CartContext);

  const [showFilter, setShowFilter] = useState(false);

  const sortOrder = (order) => {
    if (order === "LTH") {
      return (a, b) => a.discounted_price - b.discounted_price;
    } else {
      return (a, b) => b.discounted_price - a.discounted_price;
    }
  };

  const applyFilter = () => {
    const { category, userRating, sortby, searchQuery, price } = filter;
    let filteredCategory = products;
    if (category.length !== 0) {
      filteredCategory = products.filter(({ category_name }) =>
        category.includes(category_name)
      );
    }
    let filteredRating = filteredCategory;
    if (userRating) {
      filteredRating = filteredCategory.filter(
        ({ rating }) => rating >= userRating
      );
    }
    let filteredPrice = filteredRating.filter(
      ({ discounted_price }) => discounted_price <= price
    );
    let filteredSorted = filteredPrice;
    if (sortby) {
      filteredSorted = filteredPrice.sort(sortOrder(sortby));
    }
    let filteredSearch = filteredSorted.filter(({ title }) =>
      title.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );
    return filteredSearch;
  };

  const displayProduct = applyFilter();

  return (
    <>
      <Filters />
      <h2>Product Listings Page</h2>
      <section className="listing">
        <h3 className="listing-heading">
          Showing All products
          <span className="product-count">
            (Showing {displayProduct.length} products)
          </span>
        </h3>
      </section>
    </>
  );
};
