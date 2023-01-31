import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { User } from "../../../domain/users/users.model";

interface UserCardInterface extends User {
  onPress?: () => void;
}

const UserCard = ({
  first_name,
  last_name,
  email,
  avatar,
  onPress,
}: UserCardInterface) => {
  return (
    <TouchableOpacity
      style={{
        height: 120,
        borderRadius: 10,
        marginHorizontal: 10,
        backgroundColor: "#5A5A5A",
        marginVertical: 10,
      }}
      onPress={onPress}
    >
      <ImageBackground
        source={{ uri: avatar }}
        style={{
          height: "100%",
          borderRadius: 10,
          overflow: "hidden",
        }}
        resizeMode='cover'
      >
        <View
          style={{
            flexDirection: "row",
            padding: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 25,
            }}
          >
            {first_name}
          </Text>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 25,
              marginLeft: 5,
            }}
          >
            {last_name}
          </Text>
        </View>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 15,
            position: "absolute",
            bottom: 5,
            left: 10,
          }}
        >
          {email}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default UserCard;
