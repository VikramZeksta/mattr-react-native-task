import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="compass" size={30} color="#CE1694" />
        <Text style={styles.iconActivityText}>Activity</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon name="user" size={30} color="#71727A" />
        <Text style={styles.iconUserText}>Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap:50
  },
  iconContainer:{
    alignItems: "center",
  },
  iconUserText:{
    color:'#71727A',
    fontWeight:'400',
    fontSize:12,
    marginTop:2
  },
  iconActivityText:{
    fontSize:12,
    marginTop:2,
    fontWeight:'400'
  }
});
export default Footer;
