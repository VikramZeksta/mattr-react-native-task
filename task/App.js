import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import HomeScreen from "./src/screens/HomeScreen";
import UserProfile from "./src/screens/UserProfile";
import OtherProfile from "./src/screens/OtherProfiles";
import FilterProfile from "./src/screens/FilterProfile";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Activity") {
            iconName = "compass";
          } else if (route.name === "Profile ") {
            iconName = "user";
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#ce1694",
        tabBarInactiveTintColor: "#71727A",
        tabBarLabelStyle: { fontSize: 12 },
      })}
    >
      <Tab.Screen
        name="Activity"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile "
        component={UserProfile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeTabs">
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FilterProfile"
          component={FilterProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OtherProfile"
          component={OtherProfile}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
