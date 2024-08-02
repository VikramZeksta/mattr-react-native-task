import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OtherProfile = () => {
  return (
    <View style={styles.container}>
      <Text>Other Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OtherProfile;