import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Base = ({
  title = "My Title",
  description = "My desription",
  className = "p-4",
  children,
}) => (
  <div>
    <Navbar />
    <div className="container-fluid">
      {/* <div className="text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div> */}
      <div className={className}>{children}</div>
    </div>
    <Footer />
  </div>
);

export default Base;
