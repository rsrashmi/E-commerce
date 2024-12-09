import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import logo from "../../assets/images/main3.png";
import { NavLink } from "react-router-dom";

import "../../styles/header.css";
import { useSelector, useDispatch } from "react-redux";
import { cartUISliceActions } from "../../store/shopping-cart/cartUISlice";
const nav_links = [
  { display: "Home", path: "/home" },
  { display: "Shopping", path: "/shop" },
];
const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");
  const totalQuantity = useSelector((state) => state.cart.totalQuantity); //datafetch from store
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(cartUISliceActions.toggle());
  };
  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header_shrink");
      } else {
        headerRef.current.classList.remove("header_shrink");
      }
    };
    window.addEventListener("scroll", handleScroll);

    // cleanup function
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo footer_logo" />
            <h5>ईCom</h5>
          </div>
          {/** ----menu---- */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav_links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active_menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          {/**----- nav right icons ----- */}
          <div className="nav_right d-flex align-items-center gap-4">
            <span className="cart_icon" onClick={toggleCart}>
              <i className="ri-shopping-basket-line"></i>
              <span className="cart_badge">{totalQuantity}</span>
            </span>
            <span className="user">
              <i className="ri-user-line"></i>
            </span>
            <span className="mobile_menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
