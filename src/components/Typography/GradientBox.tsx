import React, { CSSProperties, ReactNode } from 'react';
import { useTheme } from '../../hooks';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../theme/Variables';

type GradientBoxProps = {
  children?: ReactNode;
  style?: CSSProperties[];
  bottomCurve?: boolean;
};

const GradientBox = ({ children, style, bottomCurve }: GradientBoxProps) => {
  const { Layout, Gutters, darkMode: isDark } = useTheme();
  const { height } = useWindowDimensions();
  const curveSize = height * 1; // adjust this value to change the size of the curve

  const styles = StyleSheet.create({
    parent: {
      height: 120,
      width: '100%',
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
