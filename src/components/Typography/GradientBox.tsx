import React, { CSSProperties, ReactNode } from 'react';
import { useTheme } from '../../hooks';
import { View, useWindowDimensions, StyleSheet, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../theme/Variables';

type GradientBoxProps = {
  children?: ReactNode;
  style?: CSSProperties[];
  bottomCurve?: boolean;
};

const GradientBox = ({ children }: GradientBoxProps) => {
  const { Layout, Gutters, darkMode: isDark } = useTheme();
  const { height } = useWindowDimensions();
  const margin = Platform.OS === 'ios' ? 0 : -40;
  const curveSize = height * 5;
  const styles = StyleSheet.create({
    parent: {
      height: 160,
      width: '100%',
      marginTop: margin,
      transform: [{ scaleX: 2 }],
      borderBottomStartRadius: curveSize,
      borderBottomEndRadius: curveSize,
      overflow: 'hidden',
    },
  });
  return (
    <LinearGradient
      colors={[Colors.primaryColor, Colors.sencondaryColor]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 2 }}
      style={styles.parent}
    >
      <View
        style={[
          Layout.fill,
          Layout.fullWidth,
          {
            transform: [{ scaleX: 0.5 }],
          },
        ]}
      >
        {children}
      </View>
    </LinearGradient>
  );
};

export default GradientBox;
