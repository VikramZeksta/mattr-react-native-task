import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, Animated } from "react-native";
import { useRoute } from "@react-navigation/native";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import data from "../../assets/data.json";

const HomeScreen = () => {
  const route = useRoute();
  const [displayData, setDisplayData] = useState([]);
  const [scrollY] = useState(new Animated.Value(0));
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastOffset, setLastOffset] = useState(0);

  const getRandomItems = () => {
    const shuffled = data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  };

  useEffect(() => {
    if (route.params?.filteredData) {
      setDisplayData(route.params.filteredData);
    } else {
      setDisplayData(getRandomItems());
    }
  }, [route.params?.filteredData]);

  const handleRefresh = useCallback(() => {
    setDisplayData(getRandomItems());
  }, []);

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [100, 0],
    extrapolate: "clamp",
  });

  const handleScroll = ({ nativeEvent }) => {
    const currentOffset = nativeEvent.contentOffset.y;
    const direction = currentOffset > lastOffset ? "down" : "up";
    const diff = Math.abs(currentOffset - lastOffset);

    if (diff > 10) {
      setHeaderVisible(direction === "up");
    }

    setLastOffset(currentOffset);
  };

  return (
    <View style={styles.container}>
      {headerVisible && (
        <Animated.View style={[styles.header, { height: headerHeight }]}>
          <Header onRefresh={handleRefresh} />
        </Animated.View>
      )}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false, listener: handleScroll }
        )}
        scrollEventThrottle={16}
      >
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
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 30,
  },
  header: {
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    alignItems: "center",
    gap: 10,
    marginTop: 100,
  },
});

export default HomeScreen;
