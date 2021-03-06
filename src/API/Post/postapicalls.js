import { API } from "../../backend";

export const getAllPosts = () => {
  return fetch(`${API}/posts`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getPostById = (postId) => {
  return fetch(`${API}/post/${postId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const createPost = (userId, token, post) => {
  return fetch(`${API}/post/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(post),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updatePost = (postId, userId, token, post) => {
  return fetch(`${API}/post/${postId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(post),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getAllUserPost = (userId, token) => {
  return fetch(`${API}/posts/${userId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const deletePost = (postId, userId, token) => {
  return fetch(`${API}/post/${postId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
