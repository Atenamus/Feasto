import React from "react";
import { Tabs } from "expo-router";
import {
  House,
  ShoppingCart,
  BookText,
  CircleUserRound,
} from "lucide-react-native";

const tabScreenOptions = (title, IconComponent) => ({
  headerShown: false,
  title: title,
  tabBarLabelStyle: {
    marginTop: -10,
    fontSize: 14,
    justifyContent: "center",
    alignContent: "center",
  },
  tabBarIcon: ({ focused }) => (
    <IconComponent color={focused ? "#FF0000" : "#808080"} />
  ),
});

const Tablayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FF0000",
        tabBarInactiveTintColor: "#808080",
      }}
    >
      <Tabs.Screen name="Home" options={tabScreenOptions("Home", House)} />
      <Tabs.Screen
        name="Cart"
        options={tabScreenOptions("Cart", ShoppingCart)}
      />
      <Tabs.Screen name="Order" options={tabScreenOptions("Order", BookText)} />
      <Tabs.Screen
        name="Account"
        options={tabScreenOptions("Account", CircleUserRound)}
      />
    </Tabs>
  );
};

export default Tablayout;
