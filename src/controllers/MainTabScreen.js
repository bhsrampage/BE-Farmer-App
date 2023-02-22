import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CameraScreen from "../screens/CameraScreen";
import HomeScreen from "../screens/HomeScreen";
import RecommendationScreen from "../screens/RecommendationScreen";

const MainTabScreen = (props) => {
  const MainTab = createNativeStackNavigator();

  return (
    <MainTab.Navigator screenOptions={{ headerShown: false }}>
      <MainTab.Screen name="Home" component={HomeScreen} />
      <MainTab.Screen name="Upload" component={CameraScreen} />
      <MainTab.Screen name="Recommendation" component={RecommendationScreen} />
    </MainTab.Navigator>
  );
};

export default MainTabScreen;
