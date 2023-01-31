import React from "react";
import {
  ActivityIndicator,
  Platform,
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";

type Props = {
  style?: StyleProp<ViewStyle>;
  height?: number | string;
  fill?: boolean;
  pointerEvents?: ViewProps["pointerEvents"];
};

const LoadingView = ({ style, fill, height = 80, ...props }: Props) => (
  <View
    style={[styles.container, fill ? styles.containerFill : { height }, style]}
    {...props}
  >
    <ActivityIndicator size={Platform.OS === "ios" ? "small" : "large"} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  containerFill: {
    flex: 1,
  },
});

export default LoadingView;
