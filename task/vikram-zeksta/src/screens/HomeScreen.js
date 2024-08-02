import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import data from "../../assets/data.json";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {data.map((user) => (
            <ProfileCard
              key={user.id}
              userId={user.id}
              firstName={user.first_name}
              lastName={user.last_name}
              dob={user.dob}
              city={user.location.city}
              image={user.photos[1].path}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    gap: 10,
  },
});

export default HomeScreen;
