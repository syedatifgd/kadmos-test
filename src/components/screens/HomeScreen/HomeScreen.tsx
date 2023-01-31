import React, { useCallback, useMemo, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RefreshControl, Text } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { useUsers } from "../../../domain/users/queries";
import { TEST_ID } from "../../../helpers/testIds";
import { Page, UserCard } from "../../atoms";
import { User } from "../../../domain/users/users.model";
import LoadingView from "../../atoms/LoadingView";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/types";

const HomeScreen = () => {
  const {
    isLoading,
    data,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    refetch,
  } = useUsers();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onPressUser = (userId: string) => {
    navigation.navigate("UserDetails", {
      userId,
    });
  };

  const listData = useMemo(() => {
    return data?.pages.reduce(
      (arr, nextArr) => arr.concat(nextArr.data ?? []),
      [] as User[]
    );
  }, [data?.pages]);

  const keyExtractor = (item: User) => `$${item?.id}-${item?.email}`;

  const onEndReached = useCallback(async () => {
    if (!hasNextPage || isFetching || isFetchingNextPage) {
      return;
    }
    await fetchNextPage();
  }, [hasNextPage, isFetching, isFetchingNextPage]);

  const [refreshing, setIsRefreshing] = useState(false);
  const onRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  const refreshControl = useMemo(
    () => (
      <RefreshControl
        tintColor='black'
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    ),
    [refreshing]
  );

  return (
    <Page testID={TEST_ID.home.screen}>
      <FlashList
        data={listData}
        renderItem={({ item }) => (
          <UserCard {...(item as User)} onPress={() => onPressUser(item.id)} />
        )}
        estimatedItemSize={120}
        ListFooterComponent={isLoading ? <LoadingView /> : null}
        ListEmptyComponent={
          !isLoading && (
            <Text style={{ alignSelf: "center", marginTop: 10, color: "red" }}>
              Data not found, please try again
            </Text>
          )
        }
        contentInset={{ ...useSafeAreaInsets() }}
        keyExtractor={keyExtractor}
        onEndReached={onEndReached}
        refreshControl={refreshControl}
        refreshing={refreshing}
      />
    </Page>
  );
};

export default HomeScreen;
