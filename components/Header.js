import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: "New Project",
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    padding: 10,
    backgroundColor: "indigo",
  },
  text: {
    color: "indigo",
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Header;
