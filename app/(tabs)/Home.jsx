import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Search } from "lucide-react-native";
import SpotLightCard from "../../components/SpotLightCard";
import RestaurantCard from "../../components/RestaurantCard";
import fetchRestaurants from "../../hooks/fetchRestaurants";
import Loader from "../../components/Loader";
const dummy = [
  {
    Id: 1,
  },
];

const Home = () => {
  const [loading, res] = fetchRestaurants();
  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          data={dummy}
          renderItem={() => {
            return (
              <>
                <View style={styles.section}>
                  <Text style={styles.deliverToText}>DELIVER TO</Text>
                  <Text style={styles.addressText}>Sundarpada, Ebaranga</Text>
                </View>
                <Pressable style={styles.searchContainer}>
                  <Text style={styles.input} keyboardType="default">
                    Search for 'Cake'
                  </Text>
                  <Search color="#000000" style={styles.searchIcon} />
                </Pressable>
                <View style={styles.section}>
                  <Text style={styles.exploreText}>Spotlight</Text>
                  <FlatList
                    data={res}
                    renderItem={({ item }) => (
                      <SpotLightCard
                        hotelName={item.name}
                        deliveryTime={item.deliveryTime}
                        imgUrl={item.imgUrl}
                      />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.$id.toString()}
                  />
                </View>
                <View style={styles.section}>
                  <Text style={styles.exploreText}>Restaurants to explore</Text>
                  {res.map((item) => (
                    <RestaurantCard
                      key={item.$id}
                      name={item.name}
                      rating={item.rating}
                      location={item.address}
                      types={item.food_type}
                      imgUrl={item.imgUrl}
                    />
                  ))}
                </View>
              </>
            );
          }}
          keyExtractor={(item) => item.Id}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 14,
    backgroundColor: "#fff",
  },
  section: {
    marginVertical: 18,
  },
  deliverToText: {
    color: "#ff0000",
    fontSize: 17,
    fontWeight: "900",
    letterSpacing: 3,
  },
  addressText: {
    letterSpacing: 1,
    fontWeight: "800",
    fontSize: 18,
  },
  input: {
    textAlignVertical: "center",
    height: 60,
    marginVertical: 18,
    paddingHorizontal: 14,
    backgroundColor: "#ecf5f5",
    borderRadius: 10,
    fontSize: 20,
    letterSpacing: 1,
  },
  searchIcon: {
    position: "absolute",
    top: 35,
    right: 14,
  },
  exploreText: {
    fontSize: 22,
    fontWeight: "900",
    letterSpacing: 0.7,
  },
});

export default Home;
