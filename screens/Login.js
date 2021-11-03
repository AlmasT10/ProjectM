import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Dimensions,
} from "react-native";
const Login = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.logo}>Project M</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <Button
          title="Login"
          onPress={() => {
            props.navigation.navigate({ routeName: "HomeScreen" });
          }}
        />
        <Text>Or</Text>
        <View>
          <Text>New User ??</Text>
          <Button
            title="Sign Up"
            onPress={() => {
              props.navigation.navigate({ routeName: "SignupScreen" });
            }}
          />
        </View>
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
  logo: {
    marginTop: 50,
    fontSize: 30,
    fontWeight: "bold",
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

export default Login;
