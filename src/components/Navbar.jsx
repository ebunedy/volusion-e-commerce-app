import React, { useState } from "react";
import { navigation } from "../data";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const [active, setActive] = useState(1);
  const [showSideNav, setShowSideNav] = useState(false);
  const [ariaExpanded, setAriaExpanded] = useState(false);
  const { showcartItems, cartItems } = useGlobalContext();

  const activeNavigation = (id) => {
    navigation.forEach((item) => {
      if (item.id === id) {
        setActive(id);
      }
      return;
    });
  };
  const openSideBar = () => {
    setShowSideNav(!showSideNav);
    setAriaExpanded(!ariaExpanded);
  };

  return (
    <header className="header grid">
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        onClick={openSideBar}
        aria-expanded={ariaExpanded ? "true" : "false"}
      >
        <span className="sr-only close-icon">Menu</span>
      </button>
      <div className="flex">
        <div>
          <img src="images/logo.png" alt="" className="logo" />
        </div>
        <nav>
          <ul
            id="primary-navigation"
            className="underline-indicator primary-navigation flex"
            navigation-visible={showSideNav ? "true" : "false"}
          >
            {navigation.map((item) => {
              return (
                <li
                  className={`${
                    active === item.id ? "active-navigation" : null
                  }`}
                  key={item.id}
                  onClick={() => activeNavigation(item.id)}
                >
                  <Link to={item.path} className="link">
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="cart-avatar-container flex">
        <div>
          <span
            className={`number-of-items-incart ${
              cartItems.length > 0 ? "show-cart-number" : null
            }`}
          >
            {cartItems.length > 0 ? cartItems.length : null}
          </span>
          <img
            src="images/icon-cart.svg"
            alt="cart icon"
            className="cart-icon"
            onClick={showcartItems}
          />
        </div>
        <div>
          <img src="images/image-avatar.png" alt="avatr" className="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
