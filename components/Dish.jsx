import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import img from "../assets/noddle.jpg";
import { useCart } from "@context/cartContextProvider";
import { Star } from "lucide-react-native";

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
          <Text style={styles.price}>Rs {price}</Text>
          <View style={styles.ratingContainer}>
            <Star fill="green" />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={img} style={styles.image} />
          <TouchableOpacity style={styles.button} onPress={addToCartHandler}>
            <Text style={styles.buttonText}>Add </Text>
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
    padding: 16,
    marginVertical: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: "#8D8C91",
    height: 165,
  },
  details: {
    flex: 1,
    marginRight: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "700",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginTop: 2,
    fontSize: 16.5,
    textAlignVertical: "center",
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: 140,
    height: 130,
    borderRadius: 8,
  },
  button: {
    position: "absolute",
    bottom: -4,
    right: 26,
    backgroundColor: "#fff",
    elevation: 10,
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 8,
    width: 90,
  },
  buttonText: {
    color: "green",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default Dish;
