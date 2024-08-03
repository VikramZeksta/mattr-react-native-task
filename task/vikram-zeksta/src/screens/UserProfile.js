import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import userData from "../../assets/data.json";
import { calculateAge } from "../utils/dateUtils";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const UserProfile = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image style={styles.image} source={{ uri: item.path }} />
    </View>
  );

  const user = userData[0];
  const age = calculateAge(user.dob);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => navigation.navigate("HomeTabs", { screen: "Activity" })}
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
          {user.photos.map((photo) => (
            <View
              key={photo.id} // Use photo.id as the key
              style={[
                styles.dot,
                activeSlide === user.photos.findIndex(p => p.id === photo.id)
                  ? styles.activeDot
                  : styles.inactiveDot,
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
            Hey, I'm {user.first_name}, a {age}-year-old marketing enthusiast who loves outdoor
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
    height: 470,
  },
  image: {
    width: deviceWidth,
    height: 470,
    resizeMode: "cover",
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
    fontSize: 16,
    fontWeight: "400",
  },
  contentText: {
    fontSize: 12,
    color: "#71727A",
  },
  interest: {
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
  cancelButton: {
    top: 50,
    left: 20,
    zIndex: 1,
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

export default UserProfile;
