import React from "react";
import { Platform } from "react-native";
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

const ProjectNavigator = createStackNavigator({
  LoginScreen: Login,
  SignupScreen: SignUp,
  HomeScreen: Home,
  ProjectListScreen: ProjectList,
  AddNewProjectScreen: AddNewProject,
  AddNewTaskScreen: AddNewTask,
  ProjectTaskListScreen: ProjectTaskList,
  TaskEditScreen: TaskEdit,
});

const ProjectTabNavigator = createBottomTabNavigator({
  HomeTab: Home,
  ProjectListTab: ProjectList,
  ProjectTaskListTab: ProjectTaskList,
});

export default createAppContainer(ProjectNavigator);
