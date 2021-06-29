import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { authenticate, isAuthenticated, signin } from "../../API/Admin";
import Base from "../core/Base";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    console.log({ email, password });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        }
      })
      .catch(console.log("signin request failed"));
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user) {
        return <Redirect to="/user/dashboard" />;
      } else {
        return <Redirect to="/user/dashboardy" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        // <div className="alert alert-info">
        //   <h2>Loading...</h2>
        // </div>
        <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-info"
            style={{ display: loading ? "" : "none" }}
          >
            Loading...
          </div>
        </div>
      </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-primary">Email</label>
              <input
                onChange={handleChange("email")}
                value={email}
                className="form-control"
                type="email"
              />
            </div>

            <div className="form-group">
              <label className="text-primary">Password</label>
              <input
                onChange={handleChange("password")}
                value={password}
                className="form-control"
                type="password"
              />
            </div>
            <button onClick={onSubmit} className="btn btn-success btn-block">
              Sign in
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <Base>
    <h1 className="text-center">Sign in</h1>
      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}
      <p className="text-center">{JSON.stringify(values)}</p>
    </Base>
  );
};

export default Signin;
