import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  NotoSans_400Regular,
  NotoSans_500Medium,
  NotoSans_600SemiBold,
  NotoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/noto-sans";
const Index = () => {
  const [fontsLoaded] = useFonts({
    NotoSans_400Regular,
    NotoSans_500Medium,
    NotoSans_600SemiBold,
    NotoSans_700Bold,
  });
  if (!fontsLoaded) return null;
  return (
    <SafeAreaView>
      <View>
        <Text>Index</Text>
        <Link href="/Home">go to home</Link>
      </View>
    </SafeAreaView>
  );
};

export default Index;
