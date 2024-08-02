import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import data from "../../assets/data.json";
import { calculateAge } from "../utils/dateUtils";
import Icon from "react-native-vector-icons/FontAwesome";

const OtherProfile = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigation = useNavigation();
  const route = useRoute();
  const { userId } = route.params || {};
  const user = data.find((user) => user.id === userId);

  if (!user) {
    return <Text>User not found</Text>;
  }

  const age = calculateAge(user.dob);

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image style={styles.image} source={{ uri: item.path }} />
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => navigation.navigate("HomeTabs")}
      >
        <Icon name="times" size={30} color={"#2F3036"} />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <FlatList
          data={user.photos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={({ nativeEvent }) => {
            const slide = Math.ceil(
              nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
            );
            if (slide !== activeSlide) {
              setActiveSlide(slide);
            }
          }}
        />
        <View style={styles.paginationContainer}>
          {user.photos.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                activeSlide === index ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
      </View>
      <View style={styles.infoStyle}>
        <Text style={styles.nameText}>
          {user.first_name} {user.last_name}, {age}
        </Text>
        <Text style={styles.cityText}>
          {user.location.city}, {user.location.country}
        </Text>
        <View>
          <Text style={styles.contentText}>
            Hey, I'm Frank, a 23-year-old marketing enthusiast who loves outdoor
            adventures. Whether it's hiking or a cozy night in, I embrace every
            moment with enthusiasm. My infectious humor and love for deep
            conversations define me. I'm seeking a partner ready for genuine
            connections and new adventures. Connect with me and let's dive in!
          </Text>
          <Text style={styles.interest}>Interests</Text>
        </View>
        <View style={styles.interestRow}>
          {user.interests.map((interest) => (
            <View key={interest.id} style={styles.intrestedON}>
              <Text style={styles.interestName}>{interest.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    position: "relative",
  },
  slide: {
    width: deviceWidth,
    height: 500,
  },
  image: {
    width: deviceWidth,
    height: 500,
    resizeMode: "cover",
  },
  cancelButton: {
    top: 50,
    left: 20,
    zIndex: 1,
  },
  infoStyle: {
    marginTop: 12,
    marginHorizontal: 15,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "900",
  },
  cityText: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "400",
  },
  contentText: {
    fontSize: 12,
    color: "#71727A",
  },
  interest: {
    marginTop: 15,
    fontSize: 12,
    fontWeight: "700",
  },
  interestRow: {
    flexDirection: "row",
    marginVertical: 10,
  },
  intrestedON: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginHorizontal: 3,
    backgroundColor: "#ce1694",
    borderRadius: 15,
  },
  interestName: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 10,
    fontWeight: "400",
  },
  paginationContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
  },
  activeDot: {
    backgroundColor: "#000",
  },
  inactiveDot: {
    backgroundColor: "#ccc",
  },
});

export default OtherProfile;
