import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import appStyles from "../styles/appStyles";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.filterButton}>
        <Text style={[appStyles.btnText]}>Filter</Text>
      </TouchableOpacity>
      <Text style={styles.connection}> Daily Connections</Text>
      <TouchableOpacity style={styles.refresh}>
        <Text style={[appStyles.btnText]}>refresh</Text>
      </TouchableOpacity>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 200,
    width: deviceWidth,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop:30
  },
  filterButton: {
    position: "absolute",
    marginTop:5,
    right: 20,
  },
  connection: {
    color: "#1F2024",
    fontWeight: "900",
    marginTop: 15,
  },
  refresh:{
    paddingVertical: 3,
    paddingHorizontal: 50,
    backgroundColor: 'transparent',
    marginTop:10,
    borderWidth: 1,
    borderColor: '#CE1694',
    borderRadius: 50,
  }
});

export default Header;
