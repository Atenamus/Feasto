import { useContext, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Dot } from "lucide-react-native";
import img from "../assets/noddle.jpg";
import CustomBtn from "../components/Button";
import { router, Redirect } from "expo-router";
import { UserContext } from "../context/userContext";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const { isLoggedIn, loading } = useContext(UserContext);
  useEffect(() => {
    console.log(isLoggedIn);
    const redirectHandler = async () => {
      await SplashScreen.hideAsync();
      if (isLoggedIn ) {
        router.replace("/Home");
      }
    };
    redirectHandler();
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={img} contentFit="cover" />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,.5)"]}
          style={styles.gradient}
        />
        <View style={styles.textContainer}>
          <View style={styles.textBlock}>
            <Text style={styles.title}>Feasto</Text>
            <View style={styles.row}>
              <Text style={styles.rowText}>Food</Text>
              <Dot color={"#ff0000"} />
              <Text style={styles.rowText}>Beverages</Text>
              <Dot color={"#ff0000"} />
              <Text style={styles.rowText}>Snacks</Text>
            </View>
            <Text style={styles.subtitle}>Order from top restaurants</Text>
          </View>
          <CustomBtn
            onPress={() => {
              router.push("/sign-up");
            }}
          >
            Get Started
          </CustomBtn>
        </View>
      </View>
      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
  },
  textContainer: {
    padding: 20,
    marginBottom: 30,
  },
  textBlock: {
    marginBottom: 16,
    gap: 10,
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "rgba(255,255,255,.9)",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: "rgba(255,255,255,.9)",
    paddingBottom: 10,
  },
  rowText: {
    fontSize: 23,
    color: "rgba(255,255,255,.9)",
  },
  subtitle: {
    color: "rgba(255,255,255,.9)",
    fontSize: 27,
  },
  text: {
    color: "#ffffff",
    fontSize: 24,
  },
});
export default App;
