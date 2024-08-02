import React from "react";
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


const ProfileCard = ({userId,firstName,lastName,dob, city, image}) => {
  const navigation = useNavigation();
    const age = calculateAge(dob);
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.imageStyle}
        source={{uri:image}}
      />
      <View style={styles.infoStyle}>
        <Text style={styles.nameText}>{firstName} {lastName}, {age}</Text>
        <Text style={styles.blackBtnText}>{city}</Text>
      </View>

      <TouchableOpacity style={styles.viewBtn} 
       onPress={() => navigation.navigate("OtherProfile", { userId })}>
        <Text style={[appStyles.btnText]}>Profile View</Text>
      </TouchableOpacity>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);
const redius = 25;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    // alignItems: "center",
    //   justifyContent: "center",
    borderRadius: 25,
    width: deviceWidth - 50,
    backgroundColor: "#fafafa",
    height: 350,
    // marginHorizontal: 20,
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
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "transparent",
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#CE1694",
    borderRadius: 12,
    marginHorizontal:15
  },
  infoStyle:{
    marginTop:12,
    marginHorizontal:15
  }
});

export default ProfileCard;
