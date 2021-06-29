import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../API/Admin";
import { deletePost, getAllUserPost } from "../../API/Post/postapicalls";
import Base from "../core/Base";

const ManagePost = () => {
  const [posts, setPosts] = useState([]);

  const { user, token } = isAuthenticated();

  const preload = (userId, token) => {
    getAllUserPost(userId, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setPosts(data);
      }
    });
  };

  useEffect(() => {
    preload(user._id, token);
  }, []);

  const deleteThisPost = (postId) => {
    console.log("POST ID: ", postId);
    deletePost(postId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload(user._id, token);
      }
    });
  };

  return (
    <Base>
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mb-4">Mange Your Blogs, {user.name}!</h1>
          {posts.map((post, index) => {
            return (
              <div key={index} className="row text-center px-4 mb-4">
                <div className="col-4 text-left">
                  <div className="row">
                    <div className="col-1"><h5>{index + 1 + "."}</h5></div>
                    <div className="col-9"><h5>{post.title.substring(0, 50) + "..."}</h5></div>
                  </div>
                  
                </div>
                <div className="col-4">
                  <Link
                    className="btn btn-secondary"
                    to={`/user/post/update/${post._id}`}
                  >
                    <i class="fas fa-edit"> </i>
                     {" "}Update
                  </Link>
                </div>
                <div className="col-4">
                  <button
                    onClick={() => {
                      deleteThisPost(post._id);
                    }}
                    className="btn btn-danger"
                  >
                    <i class="fas fa-trash-alt"></i> {" "}
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
};

export default ManagePost;
