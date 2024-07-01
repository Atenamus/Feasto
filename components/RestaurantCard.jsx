import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Heart, Star, Bike } from "lucide-react-native";
import { router } from "expo-router";

const RestaurantCard = ({ name, rating, types, location, imgUrl }) => {
  const restaurantInfo = { name, rating, types, location };
  return (
    <Pressable
      style={styles.cardContainer}
      onPress={() =>
        router.push({
          pathname: "/[Restaurant]",
          params: { restaurantInfo: JSON.stringify(restaurantInfo) },
        })
      }
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={imgUrl} contentFit="cover" />
        <LinearGradient
          colors={["transparent", "rgba(0, 0, 0, 0.8)"]}
          style={styles.gradient}
        />
        <Heart style={styles.heartIcon} color="#fff" />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.restaurantName} numberOfLines={1}>
          {name}
        </Text>
        <View style={styles.ratingContainer}>
          <Star fill="green" />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
        <Text style={styles.infoText} numberOfLines={1} ellipsizeMode="tail">
          {types}
        </Text>
        <Text style={styles.infoText}>{location}</Text>
        <View style={styles.deliveryContainer}>
          <LinearGradient
            colors={[
              "rgba(182,157,255,0.65)",
              "rgba(255,255,255,0.08867296918767509)",
            ]}
            style={styles.deliveryGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
          <Bike color="#835afc" />
          <Text style={styles.deliveryText}>FREE DELIVERY</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 170,
    marginVertical: 14,
    flexDirection: "row",
    gap: 22,
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: 130,
    height: 170,
    borderRadius: 16,
    shadowColor: "#000",
    elevation: 5,
  },
  gradient: {
    width: 130,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 50,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  heartIcon: {
    position: "absolute",
    bottom: 6,
    left: 6,
  },
  infoContainer: {
    marginTop: 10,
    width: 180,
  },
  restaurantName: {
    fontSize: 20,
  },
  ratingContainer: {
    flexDirection: "row",
  },
  ratingText: {
    marginLeft: 1,
    marginTop: 2,
    fontSize: 16.5,
    textAlignVertical: "center",
  },
  infoText: {
    color: "#8D8C91",
    fontSize: 16,
    marginBottom: 2,
    overflow: "hidden",
  },
  deliveryContainer: {
    flexDirection: "row",
    padding: 4,
    alignItems: "center",
    position: "relative",
    gap: 5,
    marginTop: 10,
  },
  deliveryGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  deliveryText: {
    color: "#835afc",
    fontSize: 16,
  },
});

export default RestaurantCard;
