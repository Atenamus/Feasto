import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const CustomBtn = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ff0000",
    padding: 10,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    width: screenWidth - 40,
    height: 50,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});

export default CustomBtn;