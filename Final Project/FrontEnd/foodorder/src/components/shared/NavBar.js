import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../App.css"
const jwt = require("jsonwebtoken");

export default class NavBar extends React.Component {
  render() {
    console.log(document.location);
    return (
      <nav className="navbar navbar-expand-lg navbar-dark aa">
        <div className="container-fluid">
          {document.location.pathname !== "/loggedin" ? (
            <NavLink className="navbar-brand" to="/">
              Food Delivery
            </NavLink>
          ) : (
            <NavLink className="navbar-brand" to="/">
              Food Delivery
            </NavLink>
          )}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {document.location.pathname !== "/loggedin" ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/signup">
                      Signup
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/loggedin"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link active" to="/cart">
                      Cart
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link active" to="/logout">
                      Logout
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
