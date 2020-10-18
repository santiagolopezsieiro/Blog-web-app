import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Context } from "../context/BlogContext";

import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const BlogPost = state.find(
    (blogpost) => blogpost.id == navigation.getParam("id")
  );

  return (
    <BlogPostForm
      initialValue={{ title: BlogPost.title, content: BlogPost.content }}
      onSubmit={(title, content) => console.log("asd")}
    />
  );
};
const styles = StyleSheet.create({});

export default EditScreen;
