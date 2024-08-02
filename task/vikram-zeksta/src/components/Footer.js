import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="compass" size={30} color="#CE1694" />
        <Text style={styles.iconActivityText}>Activity</Text>
      </View>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate("UserProfile")}
      >
        <Icon name="user" size={30} color="#71727A" />
        <Text style={styles.iconUserText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: deviceWidth,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 50,
    paddingTop: 10,
    paddingBottom: 10,
  },
  iconContainer: {
    alignItems: "center",
  },
  iconUserText: {
    color: "#71727A",
    fontWeight: "400",
    fontSize: 12,
    marginTop: 2,
  },
  iconActivityText: {
    fontSize: 12,
    marginTop: 2,
    fontWeight: "400",
  },
});

export default Footer;
