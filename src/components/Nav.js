import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import "../styles/mainStyle.css";
import { CgMenuBoxed, CgCloseR } from "react-icons/cg";
import { useCartContext } from "../context/cart_context";

function Nav() {
  const { total_item } = useCartContext();

  return (
    <div>
      <div>
        <ul className=" navbar-lists ">
          <li className="navbar-list">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="navbar-list">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="navbar-list">
            <NavLink to="/product">Products</NavLink>
          </li>
          <li className="navbar-list">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <button>Log In</button>
          </li>
          <li className="navbar-list">
            <NavLink to="/cart">
              <FiShoppingCart />
              <span>{total_item}</span>
            </NavLink>
          </li>
        </ul>
        <div className="mobile-navbar-btn">
          <CgMenuBoxed name="menu-outline" className="mobile-nav-icon" />
          <CgCloseR
            name="close-outline"
            className="mobile-nav-icon close-outline"
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
