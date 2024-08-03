import React from "react";
import PropTypes from "prop-types"; 
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import appStyles from "../styles/appStyles";
import { useNavigation } from "@react-navigation/native";
import { calculateAge } from "../utils/dateUtils";

import dummyImage from "../../assets/blankImage.png"; 

const ProfileCard = ({ userId, firstName, lastName, dob, city, image, country }) => {
  const navigation = useNavigation();
  const age = calculateAge(dob);
  const imageSource = image ? { uri: image } : dummyImage;

  return (
    <View style={styles.cardContainer}>
      <Image style={styles.imageStyle} source={imageSource} />
      <View>
        <View style={styles.infoStyle}>
          <Text style={styles.nameText}>
            {firstName} {lastName}, {age}
          </Text>
          <Text style={styles.blackBtnText}>{city}, {country}</Text>
        </View>

        <TouchableOpacity
          style={styles.viewBtn}
          onPress={() => navigation.navigate("OtherProfile", { userId })}
        >
          <Text style={[appStyles.btnText]}>Profile View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

ProfileCard.propTypes = {
  userId: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  image: PropTypes.string,
  country: PropTypes.string.isRequired,
};

const deviceWidth = Math.round(Dimensions.get("window").width);
const redius = 25;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fafafa',
    borderRadius: 25,
    width: deviceWidth - 50,
    height: 350,
  },
  imageStyle: {
    height: 237,
    width: deviceWidth - 50,
    borderTopLeftRadius: redius,
    borderTopRightRadius: redius,
  },
  blackBtnText: {
    fontSize: 12,
    color: "#1F2024",
    fontWeight: "900",
  },
  nameText: {
    fontSize: 14,
    color: "#1F2024",
    fontWeight: "400",
  },
  viewBtn: {
    paddingVertical: 7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#CE1694",
    borderRadius: 12,
    marginHorizontal: 15,
  },
  infoStyle: {
    marginTop: 12,
    marginHorizontal: 15,
  },
});

export default ProfileCard;
