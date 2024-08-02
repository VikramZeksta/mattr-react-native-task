import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FilterProfile = () => {
  return (
    <View style={styles.container}>
      <Text>Filter Profile</Text>
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

export default FilterProfile;