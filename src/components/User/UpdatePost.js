import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../API/Admin";
import { getPostById, updatePost } from "../../API/Post/postapicalls";
import Base from "../core/Base";

const UpadePost = ({ match }) => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    error: "",
    success: "",
  });

  const { title, content, error, success } = post;

  const { user, token } = isAuthenticated();

  const preload = (postId) => {
    console.log("POST ID : ", postId);
    getPostById(postId)
      .then((data) => {
        if (data.error) {
          setPost({ ...post, error: data.error });
        } else {
          setPost({
            ...post,
            title: data.title,
            content: data.content,
            error: "",
          });
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log("match.params.postId", match.params.postId);
    preload(match.params.postId);
  }, []);

  const handleChange = (name) => (event) => {
    setPost({ ...post, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    updatePost(match.params.postId, user._id, token, post)
      .then((data) => {
        if (data.error) {
          setPost({ ...post, error: data.error });
        } else {
          setPost({
            ...post,
            title: "",
            content: "",
            error: "",
            success: true,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            style={{ display: success ? "" : "none" }}
            className="alert alert-success"
          >
            Blog updated successfully
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
          <h1 className="text-center">Update Blog</h1>
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
                <i class="fas fa-pen-alt"></i>{" "}
              Update
            </button>
          </form>
          <Link to="/">
            <button className="btn btn-success mt-4">
              <i className="fas fa-home"></i> Home
            </button>
          </Link>
        </div>
        {/* <p className="text-center">{JSON.stringify(post)}</p> */}
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

export default UpadePost;
