import { StyleSheet, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Dish from "../components/Dish";
import { useCart } from "../context/userContextProvider";
const dishes = [
  {
    id: 1,
    name: "Chicken Roll",
    rating: 4.3,
    Price: 150,
    total_rating: 326,
  },
  {
    id: 2,
    name: "Veg Roll",
    rating: 3.8,
    Price: 80,
    total_rating: 116,
  },
  {
    id: 3,
    name: "Mushroom Chilli",
    rating: 4.4,
    Price: 180,
    total_rating: 106,
  },
  {
    id: 4,
    name: "Regular Chicken Noodles",
    rating: 4.7,
    Price: 220,
    total_rating: 689,
  },
  {
    id: 5,
    name: "Regular Egg Noodles",
    rating: 4.8,
    Price: 200,
    total_rating: 290,
  },
  {
    id: 6,
    name: "Schezwan Chicken Noodles",
    rating: 3.8,
    Price: 230,
    total_rating: 268,
  },
  {
    id: 7,
    name: "Schezwan Egg Noodles",
    rating: 4.4,
    Price: 210,
    total_rating: 31,
  },
];

const Restaurant = () => {
  const {} = useCart();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dishes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Dish name={item.name} rating={item.rating} price={item.price} />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
});

export default Restaurant;
