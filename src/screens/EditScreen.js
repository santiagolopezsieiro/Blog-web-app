import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const BlogPost = state.find(
    (blogpost) => blogpost.id == navigation.getParam("id")
  );

  const [title, setTitle] = useState(BlogPost.title);
  const [content, setContent] = useState(BlogPost.content);

  return (
    <View>
      <Text>edit title: </Text>
      <TextInput
        value={title}
        onChangeText={(newTitle) => setTitle(newTitle)}
      />
      <Text>edit content: </Text>
      <TextInput
        value={content}
        onChangeText={(newContent) => setContent(newContent)}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default EditScreen;
