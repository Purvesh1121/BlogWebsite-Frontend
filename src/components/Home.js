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

  const loadAllPost = () => {
    getAllPosts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setPosts(data);
      }
    });
  };

  useEffect(() => {
    loadAllPost();
  }, []);

  return (
    <Base className="p-2">
      <div className="text-center">
        <h1 className="text-success">All Blogs</h1>
        <Link to="/user/compose">
          <button className="btn btn-outline-primary">Compose</button>
        </Link>
      </div>
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
