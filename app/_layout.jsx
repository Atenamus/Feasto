import { Stack } from "expo-router";
import { UserProvider } from "@context/userContextProvider";
import { CartProvider } from "@context/cartContextProvider";
const RootLayout = () => {
  return (
    <UserProvider>
      <CartProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="[Restaurant]" options={{ headerShown: false }} />
          <Stack.Screen name="Edit" options={{ headerTitle: "Edit Account" }} />
          <Stack.Screen name="WishList" options={{ headerTitle: "WishList" }} />
        </Stack>
      </CartProvider>
    </UserProvider>
  );
};

export default RootLayout;
