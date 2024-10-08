import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark.background,
    height: "100%",
    width: "100%",
  },
});
