import logo from "../images/logo.svg";
import iconMenu from "../images/icon-menu.svg";
import avatarImage from "../images/image-avatar.png";
import ShoppingCartNav from "./ShoppingCartNav";
import UserAvatar from "./UserAvatar";
import "../css/NavBar.css";

function NavBar({ toggleMobileMenu }) {
  return (
    <div className="navbar-mobile">
      <div className="mobile-nav-left">
        <img
          className="mobile-menu-icon"
          onClick={toggleMobileMenu}
          src={iconMenu}
          alt="menu icon"
        />
        <img className="logo" src={logo} alt="logo" />
        <div className="desktop-nav-elements">
          <a className="desktop-nav-element" href="###">
            Collections
          </a>
          <a className="desktop-nav-element" href="###">
            Men
          </a>
          <a className="desktop-nav-element" href="###">
            Women
          </a>
          <a className="desktop-nav-element" href="###">
            About
          </a>
          <a className="desktop-nav-element" href="###">
            Contact
          </a>
        </div>
      </div>
      <div className="mobile-nav-right">
        <ShoppingCartNav />
        <UserAvatar avatarImage={avatarImage} />
      </div>
    </div>
  );
}

export default NavBar;
