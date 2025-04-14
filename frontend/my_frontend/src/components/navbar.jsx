
import React from "react";
import { Outlet } from "react-router";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "../css/navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link
              to={"/"}
              id="flipkart-logo"
              style={{
                fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
                fontWeight: "bold",
                fontStyle: "italic",
                color: "yellow",
              }}
            >
              Flipkart
            </Link>
          </li>
          <li>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for Products, Brands and More"
            />
          </li>
          <li>
            <Link to={"/login"} >
              Login
            </Link>
          </li>
          <li>
            <Link to={"/cart"} >
              Cart
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
export default Navbar;