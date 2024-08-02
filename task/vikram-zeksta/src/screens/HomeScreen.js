import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Button } from "react-native";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import data from "../../assets/data.json";

const HomeScreen = () => {
  const [displayedData, setDisplayedData] = useState([]);

  useEffect(() => {
    setDisplayedData(data.slice(0, 5));
  }, []);

  const handleRefresh = () => {
    const shuffledData = [...data].sort(() => 0.5 - Math.random());
    setDisplayedData(shuffledData.slice(0, 5));
  };

  return (
    <View style={styles.container}>
      <Header onRefresh={handleRefresh}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {displayedData.map((user) => (
            <ProfileCard
              key={user.id}
              userId={user.id}
              firstName={user.first_name}
              lastName={user.last_name}
              dob={user.dob}
              city={user.location.city}
              image={user.photos[1]?.path} // Use optional chaining for safety
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
    paddingTop: 20, // Adjust padding if needed
  },
  content: {
    flex: 1,
    alignItems: "center",
    gap: 10,
  },
});

export default HomeScreen;
