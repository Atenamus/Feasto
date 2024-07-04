import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ChevronRight } from "lucide-react-native";

const AccountTab = ({ title, descrip, handler }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={handler}
    >
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.subtitleText}>{descrip}</Text>
      </View>
      <View style={styles.iconContainer}>
        <ChevronRight color={"#000000"} />
      </View>
    </TouchableOpacity>
  );
};

export default AccountTab;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 23,
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  textContainer: {
    flexGrow: 1,
  },
  titleText: {
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: "500",
  },
  subtitleText: {
    fontSize: 18,
    fontWeight: "400",
    letterSpacing: 1,
  },
  iconContainer: {
    justifyContent: "center",
  },
});
