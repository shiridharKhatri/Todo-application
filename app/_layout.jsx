import { Stack } from "expo-router";
import Welcome from "../components/Welcome";
import { useFonts } from "expo-font";
export default function RootLayout() {
  useFonts({
    "outfit-regular": require("../assets/fonts/Outfit-Regular.ttf"),
    "outfit-bold": require("../assets/fonts/Outfit-Black.ttf"),
  });
  return (
    // <Stack>
    //   <Stack.Screen
    //     name="(tabs)"
    //     options={{
    //       headerShown: false,
    //     }}
    //   />
    // </Stack>
    <Welcome />
  );
}
