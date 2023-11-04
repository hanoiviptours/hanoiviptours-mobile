import React from 'react';
import { View, Platform } from 'react-native';
import { useTheme } from '../../hooks';

type ShadowBoxProps = {
  children?: React.ReactNode;
  style?: any;
};

const ShadowBox = ({ children, style }: ShadowBoxProps) => {
  const { Gutters, Fonts, darkMode: isDark } = useTheme();
  const shadowStyle = Platform.select({
    ios: {
      shadowColor: Fonts.colorPrimary,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 5,
    },
    android: {
      elevation: 3,
    },
  });

  return (
    <View style={[Gutters.tinyPadding, shadowStyle, style]}>{children}</View>
  );
};

export default ShadowBox;
