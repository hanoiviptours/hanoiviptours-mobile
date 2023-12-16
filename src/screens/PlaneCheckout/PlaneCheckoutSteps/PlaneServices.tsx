import React from 'react';
import { View } from 'react-native';
import { useTheme } from '@/hooks';
import { Colors } from '@/theme/Variables';

const PlaneServices = () => {
  const { Gutters, Layout } = useTheme();

  return (
    <View
      style={[
        Layout.fill,
        Layout.fullWidth,
        Layout.fullHeight,
        Gutters.largeBPadding,
        { backgroundColor: Colors.white },
      ]}
    ></View>
  );
};

export default PlaneServices;
