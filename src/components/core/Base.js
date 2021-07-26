import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Base = ({
  className = "",
  children,
}) => (
  <div>
    <Navbar />
    <div className="container">
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
