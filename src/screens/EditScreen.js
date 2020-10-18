import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Context } from "../context/BlogContext";

import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation, editBlogPost }) => {
  const id = navigation.getParam("id");
  const { state } = useContext(Context);

  const BlogPost = state.find((blogpost) => blogpost.id == id);

  return (
    <BlogPostForm
      initialValue={{ title: BlogPost.title, content: BlogPost.content }}
      onSubmit={(title, content) => editBlogPost(title, content, id)}
    />
  );
};
const styles = StyleSheet.create({});

export default EditScreen;
