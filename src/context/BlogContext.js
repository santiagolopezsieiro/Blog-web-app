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
    case "add_blogPost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};

const getBlogPost = (dispatch) => {
  return () => {
    const response = jsonServer.get("/blogpost");
    dispatch({ type: "get_blogPost", payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blogPost", payload: { title, content } }, callback());
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
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
  },
  [{ title: "test post", content: "test post", id: 1 }]
);
