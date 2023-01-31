import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useUserDetails from "../../../domain/users/queries/useUserDetails";
import { TEST_ID } from "../../../helpers/testIds";
import { Page } from "../../atoms";
import LoadingView from "../../atoms/LoadingView";

const UserDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const userId = route.params?.userId;
  const { data, isLoading } = useUserDetails({ userId });
  return (
    <Page
      testID={TEST_ID.userDetails.screen}
      style={{ ...useSafeAreaInsets() }}
    >
      {isLoading ? (
        <LoadingView />
      ) : (
        <View style={{ padding: 10 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Back</Text>
          </TouchableOpacity>
          <Image
            style={{
              height: 200,
              borderRadius: 10,
              marginVertical: 10,
              overflow: "hidden",
            }}
            source={{
              uri: data?.avatar,
            }}
            resizeMode={"cover"}
          />
          <Text>{`${data?.first_name} ${data?.last_name}`}</Text>
          <Text style={{ color: "blue" }}>{data.email}</Text>
        </View>
      )}
    </Page>
  );
};

export default UserDetailsScreen;
