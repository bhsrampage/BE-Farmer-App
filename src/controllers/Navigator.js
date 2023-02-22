import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MainTabScreen from "./MainTabScreen";

const Navigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTab" component={MainTabScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
