import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import CustomText from "../../components/CustomText";
import ItemList from "../../components/ItemList";
import List from "../../components/List";
import Counter from "../../components/Counter";
import Timer from "../../components/Timer";

export default function TabOneScreen() {
  const [showButton, setShowButton] = useState(true);
  const [loading, setLoading] = useState(true);

  const items = ["My first item", "My second item", "My third item"];

  const handleButtonPress = () => {
    console.log("Button pressed!");
  };

  useEffect(() => {
    // Simulating an async operation
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TP REACT</Text>
      <Timer />
      <View style={styles.separator} />
      <EditScreenInfo path="app/(tabs)/index.tsx" />

      <CustomText color="red">Hello, World!</CustomText>

      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <>
          {showButton ? (
            <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
              <Text style={styles.buttonText}>My Button</Text>
            </TouchableOpacity>
          ) : null}
          <ItemList items={items} />
          <List />
          <Counter />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 16,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    backgroundColor: "#2196F3",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
