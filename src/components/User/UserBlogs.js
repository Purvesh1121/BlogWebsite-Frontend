import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../../API/Admin";
import { getAllUserPost } from "../../API/Post/postapicalls";
import Card from "../Card";
import Base from "../core/Base";

const UserBlog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user, token } = isAuthenticated();

  const preload = (userId, token) => {
    getAllUserPost(userId, token)
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setPosts(data);
          setLoading(false);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    preload(user._id, token);
  }, []);

  const showLoading = () => {
    return (
      <h3
        className="text-center text-primary pt-4"
        style={{ display: loading ? "" : "none" }}
      >
        Loading...
      </h3>
    );
  };

  return (
    <Base className="p-2">
      <div className="text-center">
        <h1 className="text-success">All Blogs By {user.name}</h1>
      </div>
      {showLoading()}
      <div className="row mt-4">
        {posts.map((post, index) => {
          return <Card key={index} post={post} />;
        })}
      </div>
    </Base>
  );
};

export default UserBlog;
