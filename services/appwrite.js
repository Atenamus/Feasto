import { Client,Account } from "react-native-appwrite";

const client = new Client()
  .setEndpoint(process.env.EXPO_PUBLIC_API_URL)
  .setProject(process.env.EXPO_PUBLIC_PROJECT_ID);

export default client;
