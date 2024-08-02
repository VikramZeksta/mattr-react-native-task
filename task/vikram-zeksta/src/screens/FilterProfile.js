import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const FilterProfile = () => {
  const navigation = useNavigation();
  const [gender, setGender] = useState("FEMALE");
  const [ageRange, setAgeRange] = useState("25 - 30");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Filter</Text>
        <TouchableOpacity>
          <Text style={styles.clearText}>Clear All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.hr} />
      <View style={styles.gender}>
        <Text style={styles.genderText}>Gender</Text>
        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={[
              styles.genderButton,
              gender === "MALE" && styles.selectedButton,
            ]}
            onPress={() => setGender("MALE")}
          >
            <Text
              style={[
                styles.genderBtnText,
                gender === "MALE" && styles.selectedText,
              ]}
            >
              MALE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderButton,
              gender === "FEMALE" && styles.selectedButton,
            ]}
            onPress={() => setGender("FEMALE")}
          >
            <Text
              style={[
                styles.genderBtnText,
                gender === "FEMALE" && styles.selectedText,
              ]}
            >
              FEMALE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.hr} />
      <View style={styles.AgeContainer}>
        <Text style={styles.genderText}>Age Ranges</Text>
        <View style={styles.ageRangesContainer}>
          {["20 - 24", "25 - 30", "30 - 40", "40 +"].map((range) => (
            <TouchableOpacity
              key={range}
              style={[
                styles.ageButton,
                ageRange === range && styles.selectedButton,
              ]}
              onPress={() => setAgeRange(range)}
            >
              <Text
                style={[
                  styles.ageText,
                  ageRange === range && styles.selectedText,
                ]}
              >
                {range}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.hr} />
      <View style={styles.sortByContainer}>
        <Text style={styles.sortByText}>Sort By</Text>
      </View>
      <View style={styles.applyFilterCont}>
        <TouchableOpacity style={styles.fiterBtn}>
          <Text style={[styles.btnText]}>Apply Filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  header: {
    marginHorizontal: "auto",
    paddingTop: 50,
    flexDirection: "row",
    width: deviceWidth - 30,
    justifyContent: "space-between",
    marginBottom: 40,
  },
  cancelText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#CE1694",
  },
  title: {
    fontSize: 14,
    fontWeight: "800",
    color: "#1F2024",
  },
  clearText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#CE1694",
  },
  hr: {
    width: deviceWidth - 30,
    height: 1,
    backgroundColor: "#CCCCCC",
    marginVertical: 20,
    marginHorizontal: "auto",
  },
  gender: {
    width: deviceWidth - 30,
    marginHorizontal: "auto",
  },
  genderText: {
    fontSize: 14,
    color: "#1F2024",
  },
  genderContainer: {
    flexDirection: "row",
    marginTop: 15,
    gap: 7,
  },
  genderButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#CE1694",
    borderRadius: 15,
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "#CE1694",
  },
  genderBtnText: {
    fontSize: 12,
    color: "#CE1694",
  },
  selectedText: {
    fontSize: 12,
    color: "#FFF",
  },
  AgeContainer: {
    width: deviceWidth - 30,
    marginHorizontal: "auto",
  },
  ageRangesContainer: {
    flexDirection: "row",
    marginTop: 15,
    gap: 7,
  },
  ageButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#CE1694",
    borderRadius: 15,
    alignItems: "center",
  },
  ageText: {
    fontSize: 12,
    color: "#CE1694",
  },
  sortByContainer: {
    width: deviceWidth - 30,
    marginHorizontal: "auto",
  },
  sortByText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#2F3036",
  },
  applyFilterCont: {
    width: deviceWidth - 30,
    transform: [{ translateX: -((deviceWidth - 30) / 2) }],
    position: "absolute",
    bottom: 20,
    left: "50%",
  },
  fiterBtn: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#CE1694",
    borderRadius: 7,
    alignItems: "center",
    backgroundColor: "#CE1694",
  },
  btnText: {
    fontSize: 12,
    color: "#FFF",
  },
});

export default FilterProfile;
