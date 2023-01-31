import React, { ReactNode } from "react";
import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import AppStatusBar from "../../../AppStatusBar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});

export interface PageProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  testID?: string;
}

const Page = (props: PageProps) => {
  const { style, children, testID } = props;

  return (
    <View {...props} style={[styles.container, style]} testID={testID}>
      <AppStatusBar />
      {children}
    </View>
  );
};

export default Page;
