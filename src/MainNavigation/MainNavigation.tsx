import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";

// screens
import Home from "./Screens/Home";

const MainStack = createNativeStackNavigator();

export default function MainNavigation() {
  useEffect(() => {
    (async () => {
      await NavigationBar.setPositionAsync("absolute");
      await NavigationBar.setVisibilityAsync("hidden");
      await NavigationBar.setBehaviorAsync("overlay-swipe");
    })();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"transparent"} translucent />
      <MainStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: () => null,
          title: "",
        }}
      >
        <MainStack.Screen name="Home" component={Home} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
