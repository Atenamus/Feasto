import { StyleSheet, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Dish from "@component/Dish";
import { useLocalSearchParams } from "expo-router";
import { Star } from "lucide-react-native";
import { StatusBar } from "expo-status-bar";

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
  const { restaurantInfo } = useLocalSearchParams();
  const restaurant = JSON.parse(restaurantInfo);
  console.log("🚀 ~ Restaurant ~ restaurant:", restaurant);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.restaurantContainer}>
        <View style={styles.restaurantCard}>
          <View style={styles.restaurantCardInner}>
            <Text style={styles.restaurantName}>{restaurant.name}</Text>
            <Text style={styles.deliveryTime}>
              23 min - {restaurant.location}
            </Text>
            <Text style={styles.foodType}>{restaurant.types}</Text>
          </View>
          <View>
            <View style={styles.ratingContainer}>
              <Star fill={"#fff"} size={14} />
              <Text style={styles.ratingText}>{restaurant.rating}</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 15,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 17,
            fontWeight: 600,
            letterSpacing: 1,
            borderBottomWidth: 1,
            paddingBottom: 12,
            marginHorizontal: 10,
            borderBottomColor: "#8D8C91",
          }}
        >
          Menu
        </Text>
        <View
          style={{
            paddingHorizontal: 14,
          }}
        >
          <FlatList
            data={dishes}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Dish name={item.name} rating={item.rating} price={item.Price} />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      <StatusBar backgroundColor="#f2f2f2" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  restaurantContainer: {
    width: "100%",
    height: "24%",
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 16,
    display: "flex",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },
  restaurantCard: {
    backgroundColor: "#fff",
    width: "97%",
    height: 130,
    borderRadius: 20,
    padding: 16,
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
    elevation: 10,
  },
  restaurantCardInner: {
    width: "85%",
    gap: 8,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  deliveryTime: {
    fontSize: 18,
    fontWeight: "700",
  },
  foodType: {
    fontSize: 18,
    color: "#8D8C91",
    letterSpacing: 1,
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    marginTop: 4,
    backgroundColor: "green",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },
  ratingText: {
    fontSize: 20,
    color: "#fff",
  },
});

export default Restaurant;
