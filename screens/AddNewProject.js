import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { v4 as uuidv4 } from "uuid";

import Header from "../components/Header";
import ListItem from "../components/ListItem";
import AddItem from "../components/AddItem";

const AddNewProject = (props) => {
  const [items, setItems] = useState([
    {
      id: uuidv4(),
      text: "Member 1",
      desc: "Developer",
    },
    {
      id: uuidv4(),
      text: "Member 2",
      desc: "Tester",
    },
  ]);

  const showItem = (id, title, desc) => {
    Alert.alert(title, desc);
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert(
        "Alert",
        "Please enter a member name to add to the project",
        [
          {
            text: "OK",
            style: "cancel",
          },
        ],
        { cancelable: true }
      );
    } else {
      setItems((prevItems) => {
        return [{ id: uuidv4(), text }, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="New Project" />
      <TextInput placeholder="Project Name" style={styles.input} />
      <TextInput placeholder="Project Type" style={styles.input} />

      <TextInput placeholder="Start Date" style={styles.input} />

      <Header title="Members" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item={item} showItem={showItem} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },

  input: {
    height: 60,
    padding: 8,
    margin: 5,
  },

  btn: {
    backgroundColor: "#c2bad8",
    padding: 9,
    margin: 5,
  },

  btnText: {
    color: "darkslateblue",
    fontSize: 20,
    textAlign: "center",
  },
});

export default AddNewProject;
