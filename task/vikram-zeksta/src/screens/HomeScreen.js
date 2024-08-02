import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text>Hi Vikram.</Text>
      </View>
      <Footer/> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // marginHorizontal: 20,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
