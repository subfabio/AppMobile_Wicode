import React from "react";
import { View, StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import NewsList from "../lists/NewsList";
import Home from "../screens/Home";
import NewsDetail from "../screens/NewsDetail";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewsDetail" component={NewsDetail} />
      <Stack.Screen name="NewsList" component={NewsList} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
