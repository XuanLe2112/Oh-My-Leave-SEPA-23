import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Home from "./KONG/screens/Home";
import Upload from "./KONG/screens/Upload";
import Result from "./KONG/screens/Result";

import HomePage from "./Kayla/HomePage";

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }} />
        <Stack.Screen name="Upload" component={Upload}  options={{ headerShown: false }}/>
        <Stack.Screen name="Result" component={Result}  options={{ headerShown: false }}/>

        <Stack.Screen name="HomePage" component={HomePage}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default App;