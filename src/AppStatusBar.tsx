import React from 'react';
import { StatusBar } from 'react-native';

type Props = {
  inverse?: boolean;
};

const AppStatusBar = ({ inverse }: Props) => {
  return (
    <StatusBar
      translucent
      backgroundColor="transparent"
      barStyle={inverse ? 'light-content' : 'dark-content'}
    />
  );
};

export default AppStatusBar;
