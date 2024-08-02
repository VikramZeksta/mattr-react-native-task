import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import UserProfile from "./src/screens/UserProfile";
import OtherProfile from "./src/screens/OtherProfiles";
import FilterProfile from "./src/screens/FilterProfile"

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="OtherProfile" component={OtherProfile} options={{headerShown:false}}/>
        <Stack.Screen name="FilterProfile" component={FilterProfile} options={{headerShown:false}}/>
        <Stack.Screen name="UserProfile" component={UserProfile} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
