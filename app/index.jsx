import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter  } from "expo-router";
export default function Index() {
  let router = useRouter()
  return (
    <View style={styles.container}>
      <View style={styles.imageContainerView}>
        <Image
          style={styles.containerImage}
          source={require("../assets/images/start.png")}
        />
      </View>
      <View>
        <Text
          style={{
            color: Colors.dark.text,
            fontFamily: "outfit-bold",
            fontSize: 40,
            textAlign: "center",
            fontWeight: "bold",
            lineHeight: 60,
          }}
        >
          Get <Text style={{ color: Colors.dark.icon }}>Things </Text>Done!
        </Text>
        <Text
          style={{
            color: Colors.dark.text,
            paddingLeft: 15,
            paddingRight: 15,
            marginBottom: 30,
            marginTop: 10,
            textAlign: "center",
            opacity: 0.7,
            lineHeight: 22,
          }}
        >
          Stay organized and accomplish your tasks effortlessly with our simple
          and intuitive to-do app
        </Text>
        <TouchableOpacity
          onPress={() => router.push('/home')}
          style={styles.getStartedButton}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Start adding</Text>
            <Entypo name="chevron-right" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTextGuest}>
          <View style={styles.buttonContent}>
            <Text style={[styles.buttonText, styles.buttonTextGuestText]}>
              View as guest
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark.background,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  containerImage: {
    height: 350,
    width: 350,
  },
  getStartedButton: {
    backgroundColor: Colors.dark.icon,
    marginLeft: 20,
    marginRight: 20,
    padding: 16,
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
    marginRight: 5,
  },
  buttonTextGuest: {
    backgroundColor: Colors.dark.background,
    borderColor: Colors.dark.icon,
    borderWidth: 2,
    marginLeft: 20,
    marginRight: 20,
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    alignItems: "center",
  },
  buttonTextGuestText: {
    color: Colors.dark.icon,
  },
});
