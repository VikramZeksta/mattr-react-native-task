import React from 'react'
import { Text, View ,StyleSheet, Dimensions} from 'react-native'

const ProfileCard = () => {
  return (
    <View style={styles.cardContainer}>
        <Text>ProfileCard</Text>
    </View>
  )
};

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
    cardContainer: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      width: deviceWidth - 50,
      backgroundColor:'#CE1694'
      // marginHorizontal: 20,
    },
    content: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });
export default ProfileCard;