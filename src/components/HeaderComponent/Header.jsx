import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart, AiFillHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import "./Header.css";
import { useContext, useRef } from "react";
import { CartContext } from "../../context/CartContext";

export const Header = () => {
  const { getCartCount, getWishlistCount, addFilterQuery } =
    useContext(CartContext);
  const navigate = useNavigate();
  const getActiveWishlist = ({ isActive }) => {
    return {
      color: isActive && "#991b1b",
    };
  };
  const getActiveCart = ({ isActive }) => {
    return {
      color: isActive && "#15803d",
    };
  };

  return (
    <>
      <nav>
        <h1 className="header-name">
          <Link className="header-name-a" to="/">
            SnapCart
          </Link>
        </h1>
        <input className="search-input" type="text" placeholder="Search" />
        <div className="header-links">
          <Link to="/products">
            <button className="btn-header-login explore">Explore</button>
          </Link>
          <Link to="/login">
            <button className="btn-header-login">Login</button>
          </Link>

          <NavLink
            style={getActiveWishlist}
            to="/wishlist"
            className="link-wishlist"
          >
            <AiFillHeart className="link-wishlist-a" />
            <span className="badge" value={getWishlistCount()}></span>
          </NavLink>
          <NavLink style={getActiveCart} to="/cart" className="link-cart">
            <AiOutlineShoppingCart />
            <span className="badge" value={getCartCount()}></span>
          </NavLink>
          <button
            // style={{ display: checkLogin() ? "" : "none" }}
            className="btn-header-logout"
            // onClick={() => logoutHandler()}
            onClick={() => navigate("/profile")}
          >
            {/* <AiOutlineLogout className="btn-header-logout-icon" /> */}
            <CgProfile className="btn-header-logout-icon" />
          </button>
        </div>
      </nav>
    </>
  );
};
