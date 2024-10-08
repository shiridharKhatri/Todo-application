import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Colors } from "../../constants/Colors";
export default function Tablayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:Colors.dark.background,
        headerShown: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: Colors.dark.primary,
          borderTopWidth: 1,
          paddingBottom: 10,
          paddingTop: 5,
          margin: 10,
          borderRadius: 20,
        },
        tabBarLabelStyle: {
          display: "none",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={35} color={color} />
          ),
          tabBarIconStyle: {
            backgroundColor: Colors.dark.background,
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: "Add",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="add-circle" size={35} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person" size={35} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
