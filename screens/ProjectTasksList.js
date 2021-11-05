import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

const ProjectTaskList = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Project Task List</Text>
      <Button
        title="Add New Task"
        onPress={() => {
          props.navigation.navigate({ routeName: "AddNewTaskScreen" });
        }}
      />
    </View>
  );
};

ProjectTaskList.navigationOptions = (navigationData) => {
  return {
    headerRight: () => {
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="add"
          iconName="ios-add"
          onPress={() => {
            navigationData.navigation.navigate({
              routeName: "AddNewTask",
            });
          }}
        />
      </HeaderButtons>;
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProjectTaskList;
