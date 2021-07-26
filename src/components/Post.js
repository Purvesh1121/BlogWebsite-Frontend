import React, { useState, useEffect } from "react";
import { getPostById } from "../API/Post/postapicalls";
import Base from "./core/Base";

const Post = ({ match }) => {
  const [info, setInfo] = useState({
    title: "",
    content: "",
    author: "",
    error: "",
  });

  const getPost = (postId) => {
    getPostById(postId).then((data) => {
      if (data.error) {
        setInfo({
          ...info,
          error: data.error,
        });
      } else {
        setInfo({
          ...info,
          title: data.title,
          content: data.content,
          author: data.author.name,
        });
      }
    });
  };

  useEffect(() => {
    console.log("id: ", match.params.postId);
    getPost(match.params.postId);
  }, []);

  const postBody = () => {
    return (
      <div class="container-fluid px-lg-5 px-2">
        <h2 class="text-lg-center text-left post-title font">{info.title}</h2>
        <p class="post-body text-left mt-4">{info.content}</p>
        <p class="text-left">
          <span class="text-danger">By</span>:{" "}
          <span class="text-warning">{info.author}</span>
        </p>
      </div>
    );
  };

  return (
    <Base>
      {postBody()}
    </Base>
  );
};

export default Post;
