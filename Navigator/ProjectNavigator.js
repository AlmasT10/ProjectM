import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Home from "../screens/Home";
import AddNewProject from "../screens/AddNewProject";
import AddNewTask from "../screens/AddNewTask";
import ProjectList from "../screens/ProjectList";
import TaskEdit from "../screens/TaskEdit";
import ProjectTaskList from "../screens/ProjectTasksList";
import { Button } from "react-native";

const ProjectNavigator = createStackNavigator({
  LoginScreen: Login,
  SignupScreen: SignUp,
  HomeScreen: Home,
  ProjectListScreen: {
    screen: ProjectList,
  },
  AddNewProjectScreen: AddNewProject,
  ProjectTaskListScreen: ProjectTaskList,
  TaskEditScreen: TaskEdit,
  AddNewTaskScreen: AddNewTask,
});

export default createAppContainer(ProjectNavigator);
