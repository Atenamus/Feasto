import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import biryani from "../assets/biryani.jpg";

const SpotLightCard = ({ imgUrl, hotelName, deliveryTime }) => {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image style={styles.image} source={imgUrl} contentFit="cover" />
        <LinearGradient
          colors={["transparent", "rgba(0, 0, 0, 0.8)"]}
          style={styles.gradient}
        />
        <Text style={styles.discountText}>50% OFF</Text>
      </View>
      <Text style={styles.hotelName}>{hotelName}</Text>
      <Text style={styles.deliveryTime}>{deliveryTime} min</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginRight: 15,
    position: "relative",
    width: 100,
    height: 180,
    borderRadius: 16,
  },
  image_container: {
    position: "relative",
  },
  image: {
    width: 95,
    height: 124,
    borderRadius: 16,
  },
  gradient: {
    width: 95,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 50,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  discountText: {
    position: "absolute",
    bottom: 10,
    left: 8,
    color: "#fff",
    fontSize: 22,
    fontWeight: "900",
  },
  hotelName: {
    fontSize: 16.9,
    letterSpacing: 0.9,
    fontWeight: "680",
  },
  deliveryTime: {
    color: "#8D8C91",
    fontWeight: "500",
  },
});

export default SpotLightCard;
