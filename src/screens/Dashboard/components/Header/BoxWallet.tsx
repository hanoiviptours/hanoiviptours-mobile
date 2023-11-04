import React from 'react';
import { View, Text, useWindowDimensions } from 'react-native';
import { useTheme } from '@/hooks';
import { ShadowBox } from '@/components';
import { Colors } from '@/theme/Variables';

type BoxWalletProps = {
  style?: any;
};
const BoxWallet = ({ style }: BoxWalletProps) => {
  const { width, height } = useWindowDimensions();
  // const { Fonts, Gutters, Layout, Images, darkMode: isDark } = useTheme();
  return (
    <ShadowBox
      style={[
        {
          width: width * 0.9,
          height: height * 0.07,
          backgroundColor: Colors.white,
          borderRadius: 5,
          marginTop: -height * 0.04,
        },
        style,
      ]}
    >
      <Text>1234248282</Text>
    </ShadowBox>
  );
};

export default BoxWallet;
