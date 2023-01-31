import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../components/screens/HomeScreen/HomeScreen";
import UserDetailsScreen from "../components/screens/UserDetailsScreen/UserDetailsScreen";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Home"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='UserDetails' component={UserDetailsScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
