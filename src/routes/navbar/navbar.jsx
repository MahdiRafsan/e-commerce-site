import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <Link className="logo-container" to="/">
          <CrownLogo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            HOME
          </Link>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/cart">
            CART
          </Link>
          <Link className="nav-link" to="/register">
            REGISTER
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN-IN
          </Link>
          <Link className="nav-link" to="/sign-out">
            SIGN-OUT
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
