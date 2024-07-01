import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import img from "../assets/noddle.jpg";
import { useCart } from "@context/cartContextProvider";

const Dish = ({ name, price, rating, image = { img }, id }) => {
  const { dispatch } = useCart();
  const addToCartHandler = () => {
    const dish = { name, price, rating, img, id };
    dispatch({ type: "ADD_TO_CART", payload: dish });
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>Rs{price}</Text>
          <Text style={styles.rating}>Rating: {rating}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={img} style={styles.image} />
          <TouchableOpacity style={styles.button} onPress={addToCartHandler}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 8,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
    padding: 16,
    marginVertical: 5,
    alignItems: "center",
  },
  details: {
    flex: 1,
    marginRight: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    color: "#888",
    marginBottom: 4,
  },
  rating: {
    fontSize: 14,
    color: "#666",
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  button: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "#ff6347",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default Dish;
