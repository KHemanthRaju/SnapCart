import { useContext } from "react";
import "./HomePage.css";
import { ProductContext } from "../../context/ProductContext";

const HomePage = () => {
  const { categories } = useContext(ProductContext);
  return categories.length === 0 ? (
    <div>Hello world</div>
  ) : (
    <>
      <section className="category">
        <h2>CATEGORIES</h2>
        <ul className="landing-ui">
          {categories.map(
            ({ _id, categoryName, description, categoryImage }) => (
              <li
                key={_id}
                style={{ backgroundImage: `url(${categoryImage})` }}
              >
                <h2 className="category-text">{categoryName}</h2>
                <p className="category-text">Check out our {description}</p>
              </li>
            )
          )}
        </ul>
      </section>
      <div className="landing-image-container">
        <img
          className="landing-image"
          alt="landing"
          src={require("../../Images/3588601.jpg")}
        />
      </div>
    </>
  );
};

export default HomePage;
