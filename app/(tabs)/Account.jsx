import { View, Text } from "react-native";
import React, { useContext } from "react";
import CustomBtn from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import authService from "../../services/auth";
import { UserContext } from "../../context/userContext";
import { router } from "expo-router";

const Account = () => {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <SafeAreaView>
      {isLoggedIn && (
        <CustomBtn
          onPress={() => {
            try {
              authService.logoutUser(sessionId);
              router.replace("/sign-in");
            } catch (error) {
              console.log(error);
            } finally {
              setIsLoggedIn(false);
            }
          }}
        >
          Logout
        </CustomBtn>
      )}
    </SafeAreaView>
  );
};

export default Account;
