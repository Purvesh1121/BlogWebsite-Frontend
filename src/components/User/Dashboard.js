import React from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../API/Admin";

const Dashboard = () => {
  const {
    user: { name, lastname, email },
  } = isAuthenticated();

  const userLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-dark text-white">User Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/user/blogs" className="nav-link text-success">
              User Blogs
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/user/posts/manage" className="nav-link text-success">
              Manage Blogs
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/user/account" className="nav-link text-success">
              Account Info
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const userRightSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header">User Information</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Name:</span> {name}{" "}
            {lastname}
          </li>
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Email:</span> {email}
          </li>

          <li className="list-group-item">
            <span className="badge badge-danger">User Profile</span>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <Base
      title="Welcome to admin area"
      description="Manage all of your products here"
      className="container bg-success p-4"
    >
      <div className="row">
        <div className="col-lg-3 col-12">{userLeftSide()}</div>
        <div className="col-lg-9 col-12 mt-lg-0 mt-4">{userRightSide()}</div>
      </div>
    </Base>
  );
};

export default Dashboard;
