import React, { useState } from "react";
import Base from "./core/Base";
import { Link, Redirect } from "react-router-dom";
import { isAuthenticated } from "../API/Admin";
import { createPost } from "../API/Post/postapicalls";

const Compose = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    error: "",
    success: "",
  });

  const { title, content, error, success } = post;

  const { user, token } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setPost({ ...post, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setPost({ ...post, error: false });
    createPost(user._id, token, post).then((data) => {
      if (data.error) {
        setPost({ ...post, error: data.error });
      } else {
        setPost({ ...post, title: "", content: "", error: "", success: true });
      }
    });
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            style={{ display: success ? "" : "none" }}
            className="alert alert-success"
          >
            Blog created successfully
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            style={{ display: error ? "" : "none" }}
            className="alert alert-danger"
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  const blogForm = () => {
    return (
      <div>
        <div class="container text-secondary">
          <h1 className="text-center">Create Blog</h1>
          <form>
            <div class="form-group">
              <label>Blog Title</label>
              <input
                class="form-control"
                type="text"
                name="postTitle"
                onChange={handleChange("title")}
                value={title}
              />
            </div>
            <div class="form-group">
              <label>Blog Content</label>
              <textarea
                class="form-control"
                name="postBody"
                rows="5"
                cols="30"
                onChange={handleChange("content")}
                value={content}
              ></textarea>
            </div>
            <button
              onClick={(event) => {
                onSubmit(event);
              }}
              class="btn btn-primary"
            >
              <i class="fas fa-upload"></i>
              {" "}Publish
            </button>
          </form>
          <Link to="/">
            <button className="btn btn-success mt-4">
              <i className="fas fa-home"></i> Home
            </button>
          </Link>
        </div>
        <p className="text-center">{JSON.stringify(post)}</p>
      </div>
    );
  };

  return (
    <Base>
      {successMessage()}
      {errorMessage()}
      {blogForm()}
    </Base>
  );
};

export default Compose;
