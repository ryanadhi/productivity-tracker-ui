import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";
import Home from "./screens/Home";
import Challenge from "./screens/Challenge";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              height: 100,
            },
            headerTransparent: true,
            title: "",
            headerLeft: () => (
              <AntDesign
                name="menuunfold"
                size={32}
                color="#fff"
                style={{ marginLeft: 35 }}
              />
            ),
            headerRight: () => (
              <Image
                source={require("./assets/user.png")}
                style={{ marginRight: 35, width: 75, height: 75 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Challenge"
          component={Challenge}
          options={{
            headerStyle: {
              height: 100,
            },
            headerTransparent: true,
            title: "",
            headerLeft: () => (
              <AntDesign
                name="menuunfold"
                size={32}
                color="#000"
                style={{ marginLeft: 35 }}
              />
            ),
            headerRight: () => (
              <Image
                source={require("./assets/user.png")}
                style={{ marginRight: 35, width: 75, height: 75 }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
