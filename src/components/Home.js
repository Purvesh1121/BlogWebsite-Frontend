import React, { useEffect, useState } from "react";
import Base from "./core/Base";
import "../App.css";
import Post from "./Post";
import Card from "./Card";
import { getAllPosts } from "../API/Post/postapicalls";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadAllPost = () => {
    getAllPosts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setPosts(data);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    loadAllPost();
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
        <h1 className="font"><span className="blue">All</span> <span className="red"> Blogs</span></h1>
        <Link to="/user/compose">
          <button className="btn btn-outline-primary">Compose</button>
        </Link>
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

export default Home;
<div>
  <h1>Hello! its working</h1>
</div>;
