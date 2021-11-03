import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import ProjectNavigator from "./Navigator/ProjectNavigator";

export default function App() {
  return <ProjectNavigator />;
}
