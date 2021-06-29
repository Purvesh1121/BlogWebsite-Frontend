import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { isAuthenticated, signout } from "../../API/Admin";


const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#1abc9c" };
  } else {
    return { color: "" };
  }
};


const Navbar = ({ history }) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand px-4" href="/">
          BlogWebsite
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#thenav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="thenav">
          <ul class="navbar-nav ml-auto pl-4">
            <li class="nav-item active">
              <Link style={currentTab(history, "/")} className="nav-link" to="/">
                HOME
              </Link>
            </li>
            {isAuthenticated() && (
              <li class="nav-item active">
                <Link style={currentTab(history, "/user/dashboard")} className="nav-link" to="/user/dashboard">
                  DASHBOARD
                </Link>
              </li>
            )}
            <li class="nav-item active">
              <Link style={currentTab(history, "/about")} className="nav-link" to="/about">
                ABOUT
              </Link>
            </li>
            <li class="nav-item active">
              <Link style={currentTab(history, "/contact")} className="nav-link" to="/contact">
                CONTACT
              </Link>
            </li>
            {!isAuthenticated() && (
              <Fragment>
                <li className="nav-item active">
                  <Link style={currentTab(history, "/signup")} className="nav-link" to="/signup">
                    SIGNUP
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link style={currentTab(history, "/signin")} className="nav-link" to="/signin">
                    SIGNIN
                  </Link>
                </li>
              </Fragment>
            )}
            {isAuthenticated() && (
              <li className="nav-item text-warning">
                <Link
                  className="nav-link text-warning"
                  onClick={() => {
                    signout(() => {
                      history.push("/");
                    });
                  }}
                >
                  SIGNOUT
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
