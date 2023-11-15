import * as React from 'react';
import { View, Text as RNText, StyleSheet, FlexAlignType } from 'react-native';
import { useTheme } from '../../hooks';
import { DefaultVariables } from '../../theme/index';
const { Colors } = DefaultVariables;

type TextProps = {
  type: 'title' | 'body' | 'caption' | 'subtitle' | 'button' | 'label';
  align: 'center' | 'left' | 'right' | 'auto' | 'justify';
  style?: any;
  textStyle?: any;
  children: React.ReactNode;
};

const Text = ({
  type,
  align = 'left',
  style,
  textStyle,
  children,
}: TextProps) => {
  const { Fonts, darkMode: isDark } = useTheme();
  const textStyles = StyleSheet.create({
    title: {
      ...Fonts.titleSmall,
    },
    body: {
      ...Fonts.textRegular,
    },
    caption: {
      ...Fonts.textSmall,
      color: Colors.textGray200,
    },
    subtitle: {
      fontSize: 20,
      textAlign: align,
    },
    button: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      textAlign: 'center',
    },
    label: {
      ...Fonts.textRegular,
    },
  });

  const styles = StyleSheet.create({
    container: {
      alignItems: align as FlexAlignType,
    },
  });

  return (
    <View style={[styles.container, style]}>
      <RNText style={[textStyles[type], textStyle]}>{children}</RNText>
    </View>
  );
};

export default Text;
