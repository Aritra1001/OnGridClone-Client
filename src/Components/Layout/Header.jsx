import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {

  // const ref= useRef(null);

  // const handelClick = (e)=>{
  //   e.preventDefault();
  //   ref.current?.scrollIntoView({behaviour: 'smooth'})
  // }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              src="https://ongrid.in/images/home/logo/logo_ongrid-darkbakground.png"
              alt="Bootstrap"
              width="100"
              height="50"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link" smooth to="/#why" >
                  Why OnGrid
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" smooth to="/#ourOfferings">
                  Our Offerings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" smooth to="/#businesses" >
                  Businesses
                </Link>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/faq">
                  FAQs
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/bookDemo">
                  Book a Demo
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  SignUp
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  LogIn
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
