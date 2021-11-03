import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Dimensions,
} from "react-native";

const SignUp = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <Text>Create New Account</Text>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <Button
          title="Create New Account"
          onPress={() => {
            props.navigation.navigate({ routeName: "HomeScreen" });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  inputContainer: {
    marginTop: 150,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 10,
    height: 40,
    width: Dimensions.get("window").width * 0.7,
    borderRadius: 10,
  },
});

export default SignUp;
