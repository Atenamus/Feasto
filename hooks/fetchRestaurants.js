import { useEffect, useState } from "react";
import client from "../services/appwrite";
import { Databases } from "react-native-appwrite";

const fetchRestaurants = () => {
  const databases = new Databases(client);
  const [loading, setLoading] = useState(true);
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    const requestRestaurant = async () => {
      let result = databases.listDocuments(
        process.env.EXPO_PUBLIC_DATABASE_ID,
        process.env.EXPO_PUBLIC_COLLECTION_ID
      );

      result
        .then((response) => {
          setRestaurantList(response.documents);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    };

    requestRestaurant();
  }, []);

  return [loading, restaurantList];
};

export default fetchRestaurants;
