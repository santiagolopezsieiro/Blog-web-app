import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import BlogContext, { BlogProvider } from "../context/BlogContext";

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Button title="add a blog" onPress={addBlogPost} />
      <FlatList
        keyExtractor={(blogPost) => blogPost.title}
        data={data}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default IndexScreen;
