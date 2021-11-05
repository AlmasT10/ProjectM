import React, { useState } from "react";
import { View, StyleSheet, FlatList, Alert, Image, Button } from "react-native";
import { v4 as uuidv4 } from "uuid";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Header from "../components/Header";
import ProjectListItem from "../components/ProjectListItem";
import AddListItem from "../components/AddListItem";
import HeaderButton from "../components/HeaderButton";

const ProjectList = (props) => {
  const [items, setItems] = useState([
    {
      id: uuidv4(),
      text: "TodoSalud",
      desc: "Health App",
    },
    {
      id: uuidv4(),
      text: "EndTimeRadio",
      desc: "Radio App",
    },
    {
      id: uuidv4(),
      text: "Shalom Tidings",
      desc: "Magazine",
    },
    {
      id: uuidv4(),
      text: "Posterity+",
      desc: "Social App",
    },
    {
      id: uuidv4(),
      text: "CityFancy",
      desc: "Restaurant App",
    },
    {
      id: uuidv4(),
      text: "Shalom World",
      desc: "Spiritual App",
    },
    {
      id: uuidv4(),
      text: "Lulu Grocery",
      desc: "E-commerce App",
    },
    {
      id: uuidv4(),
      text: "JoyAlukkas Loyalty",
      desc: "Loyalty App",
    },
    {
      id: uuidv4(),
      text: "JoyAlukkas Exchange",
      desc: "Currency Rate App",
    },
  ]);

  const showItem = (id, title, desc) => {
    Alert.alert(title, desc);
    props.navigation.navigate({ routeName: "ProjectTaskListScreen" });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert(
        "No item entered",
        "Please enter an item when adding to your shopping list",
        [
          {
            text: "Understood",
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
      <Header title="Project Management App" />
      <Image
        source={{
          uri: "https://www.eiresystems.com/wp-content/uploads/Depositphotos_184133086_s-2019.jpg",
        }}
        style={{ width: 420, height: 200 }}
      />

      <AddListItem
        addItem={addItem}
        onPress={() => {
          props.navigation.navigate({ routeName: "AddNewProjectScreen" });
        }}
      />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ProjectListItem item={item} showItem={showItem} />
        )}
      />
    </View>
  );
};

ProjectList.navigationOptions = (navigationData) => {
  return {
    headerRight: () => {
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-add"
          onPress={() => {
            navigationData.navigation.navigate({
              routeName: "AddNewProjectScreen",
            });
          }}
        />
      </HeaderButtons>;
    },
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default ProjectList;
