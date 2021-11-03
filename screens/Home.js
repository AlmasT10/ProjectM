import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Home = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Home</Text>
      <Button
        title="Projects"
        onPress={() => {
          props.navigation.navigate({ routeName: "ProjectListScreen" });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
});

export default Home;
