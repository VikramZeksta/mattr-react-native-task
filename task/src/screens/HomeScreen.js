import React, { useState, useEffect, useCallback  } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import data from "../../assets/data.json";


const HomeScreen = () => {
  const route = useRoute();
  const [displayData, setDisplayData] = useState([]);

  console.log(displayData,14);
  

  const getRandomItems = () => {
    const shuffled = data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  };

  useEffect(() => {
    if (route.params?.filteredData) {
      console.log(route.params?.filteredData,23);
      
      setDisplayData(route.params.filteredData);
    } else {
      setDisplayData(getRandomItems());
    }
  }, [route.params?.filteredData]);

  const handleRefresh = useCallback(() => {
    setDisplayData(getRandomItems());
  }, []);

  return (
    <View style={styles.container}>
      <Header onRefresh={handleRefresh} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {displayData.map((user) => (
            <ProfileCard
              key={user.id}
              userId={user.id}
              firstName={user.first_name}
              lastName={user.last_name}
              dob={user.dob}
              city={user.location.city}
              country={user.location.country}
              image={user.photos[1]?.path}
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
    paddingTop: 20, 
  },
  content: {
    flex: 1,
    alignItems: "center",
    gap: 10,
  },
});

export default HomeScreen;
