import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import appStyles from "../styles/appStyles";
import { useNavigation } from "@react-navigation/native";

const Header = ({ onRefresh }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() => navigation.navigate("FilterProfile")}
      >
        <Text style={[appStyles.btnText]}>Filter</Text>
      </TouchableOpacity>
      <Text style={styles.connection}> Daily Connections</Text>
      <TouchableOpacity style={styles.refresh} onPress={onRefresh}>
        <Text style={[appStyles.btnText]}>refresh</Text>
      </TouchableOpacity>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: deviceWidth,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 10,
  },
  filterButton: {
    position: "absolute",
    marginTop: 5,
    right: 20,
  },
  connection: {
    color: "#1F2024",
    fontWeight: "900",
    marginTop: 15,
  },
  refresh: {
    paddingVertical: 3,
    paddingHorizontal: 50,
    backgroundColor: "transparent",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#CE1694",
    borderRadius: 50,
  },
});

export default Header;
