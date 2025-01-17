import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import CustomBtn from "@components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import authService from "@services/auth";
import { UserContext } from "@context/userContext";
import { router, Link } from "expo-router";
import { ChevronRight } from "lucide-react-native";
import AccountTab from "@components/AccountTab";
const Account = () => {
  const { isLoggedIn, setIsLoggedIn, userData } = useContext(UserContext);
  console.log("🚀 ~ Account ~ userData:", userData);
  const handleLogout = async () => {
    try {
      await authService.logoutUser();
      router.replace("/sing-in");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoggedIn(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {isLoggedIn && (
        <View>
          <View style={styles.userInfoContainer}>
            <Text style={styles.userName}>{userData.name.toUpperCase()}</Text>
            <Text style={styles.userEmail}>{userData.email}</Text>
            <View style={styles.editProfileContainer}>
              <Link href={"/Edit"} style={styles.editProfile}>
                Edit Profile
              </Link>
              <ChevronRight style={styles.chevronRight} />
            </View>
          </View>
          <AccountTab
            title={"WishList"}
            descrip={"See Your Favorite Restaurants"}
            handler={() => router.navigate("/WishList")}
          />
          <AccountTab
            title={"Addresses"}
            descrip={"Share,Edit & Add New Addresses"}
          />
          <AccountTab
            title={"Payment Options"}
            descrip={"See Your Payment Option"}
          />
          <View
            style={{
              marginTop: 20,
            }}
          >
            <CustomBtn onPress={handleLogout}>Logout</CustomBtn>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 100,
    backgroundColor: "#fff",
  },
  userInfoContainer: {
    gap: 4,
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  userName: {
    fontSize: 23,
    fontWeight: "700",
    letterSpacing: 3,
  },
  userEmail: {
    fontSize: 17,
    color: "gray",
    letterSpacing: 1,
  },
  editProfileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  editProfile: {
    color: "#ff0000",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  chevronRight: {
    color: "#ff0000",
  },
});

export default Account;
