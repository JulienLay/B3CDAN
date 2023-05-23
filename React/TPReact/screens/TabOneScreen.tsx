import React from "react";
import { View, StyleSheet } from "react-native";
import TabNavigator from "../navigation/TabNavigator";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <TabNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
