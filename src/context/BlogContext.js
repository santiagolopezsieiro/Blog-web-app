import React, { useReducer } from "react";
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";
import Axios from "axios";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogPost":
      return action.payload;
    case "edit_BlogPost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case "delete_blogPost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const getBlogPost = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogpost");
    dispatch({ type: "get_blogPost", payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post("/blogpost", { title, content });
    if (callback) {
      return callback();
    }
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogpost/${id}`);
    dispatch({ type: "delete_blogPost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (title, content, id, callback) => {
    dispatch({ type: "edit_BlogPost", payload: { id, title, content } });
    if (callback) {
      return callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    addBlogPost,
    deleteBlogPost,
    editBlogPost,
    getBlogPost,
  },
  []
);
