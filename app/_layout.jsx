import { Stack } from "expo-router";
import UserProvider from "../context/userContextProvider";
const RootLayout = () => {
  return (
    <UserProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="Restaurant" options={{ headerShown: false }} />
      </Stack>
    </UserProvider>
  );
};

export default RootLayout;
