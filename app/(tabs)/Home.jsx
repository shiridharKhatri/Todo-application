import { View, Text } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
export default function Home() {
  return (
    <View
      style={{
        backgroundColor: Colors.dark.background,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: Colors.dark.icon }}>Home</Text>
    </View>
  );
}
