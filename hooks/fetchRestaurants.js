import { useEffect, useState } from "react";
import client from "../services/appwrite";
import { Databases } from "react-native-appwrite";

const fetchRestaurants = () => {
  const databases = new Databases(client);

  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    const requestRestaurant = async () => {
      let result = databases.listDocuments(
        process.env.EXPO_PUBLIC_DATABASE_ID,
        process.env.EXPO_PUBLIC_COLLECTION_ID
      );

      result.then(
        function (response) {
          setRestaurantList(response.documents);
        },
        function (error) {
          console.log(error);
        }
      );
    };

    requestRestaurant();
  }, []);

  return restaurantList;
};

export default fetchRestaurants;
