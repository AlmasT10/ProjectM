import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";

const AddNewTask = () => {
  const [number, onChangeNumber] = React.useState("");
  const [tasktype, onTaskType] = React.useState("");
  const [taskname, onTaskName] = React.useState("");
  const [hours, onHoursChanged] = React.useState("");
  const [comments, onCommentsChanged] = React.useState("");
  const [taskStatus, setTaskStatusText] = useState(
    "Pre-requisite task status:"
  );

  const onPressTitle = () => {
    setTaskStatusText("Pre-requisite task status:");
  };

  return (
    <SafeAreaView>
      <TextInput
        style={{
          height: 50,
          marginTop: 60,
          marginBottom: 12,
          marginLeft: 12,
          marginRight: 12,
          borderWidth: 1,
          borderRadius: 5,
          padding: 10,
        }}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Task ID"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onTaskType}
        value={tasktype}
        placeholder="Task Type"
      />
      <TextInput
        style={styles.input}
        onChangeText={onTaskName}
        value={taskname}
        placeholder="Task Name"
      />
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={onPressTitle}>
          {taskStatus}
          {"\n"}
        </Text>
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onHoursChanged}
        value={hours}
        placeholder="Hours Worked"
        keyboardType="numeric"
      />
      <TextInput
        style={{
          height: 100,
          marginBottom: 12,
          marginLeft: 12,
          marginRight: 12,
          borderWidth: 1,
          borderRadius: 5,
          paddingRight: 10,
          paddingLeft: 10,
        }}
        onChangeText={onCommentsChanged}
        value={comments}
        placeholder="Comments"
        multiline={true}
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.button} onPress={() => save()}>
        <Text style={{ color: "white" }}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },

  mTop: {
    marginTop: 40,
  },

  baseText: {
    margin: 12,
  },

  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#575DD9",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 32,
    marginHorizontal: 32,
    borderRadius: 6,
  },
});

export default AddNewTask;
