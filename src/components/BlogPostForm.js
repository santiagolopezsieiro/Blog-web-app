import React, { useState, useContext } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const BlogPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <View>
      <Text style={styles.label}>title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button title="save blog post" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default BlogPostForm;
