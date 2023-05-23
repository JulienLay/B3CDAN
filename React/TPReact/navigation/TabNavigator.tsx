import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeScreen({ }) {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}

function MessageScreen() {
  return (
    <View>
      <Text>Message Screen</Text>
    </View>
  );
}

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Message" component={MessageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;