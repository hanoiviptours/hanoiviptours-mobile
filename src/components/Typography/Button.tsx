import * as React from 'react';
import { Button as RNButton } from '@rneui/themed';
import { View, StyleSheet, FlexAlignType } from 'react-native';
import { useTheme } from '../../hooks';

type ButtonProps = {
  type?: 'fill' | 'primary' | 'outline' | 'link' | 'clear';
  align?: 'center' | 'left' | 'right' | 'auto' | 'justify';
  viewStyle?: any;
  buttonStyle?: any;
  title?: string;
  height?: number;
  radius: number;
  disabled?: boolean;
  onPress?: () => void;
};

const Button = ({
  type,
  align = 'left',
  viewStyle,
  buttonStyle,
  title,
  height = 40,
  radius = 0,
  disabled = false,
  onPress,
}: ButtonProps) => {
  const { Colors, darkMode: isDark } = useTheme();

  const styles = StyleSheet.create({
    container: {
      alignItems: align as FlexAlignType,
    },
  });

  return (
    <View style={[styles.container, viewStyle]}>
      <RNButton
        title={title}
        disabled={disabled}
        onPress={onPress}
        containerStyle={{
          width: '90%',
          height: height,
          marginHorizontal: 30,
          marginVertical: 10,
        }}
        buttonStyle={[
          type === 'primary' && { backgroundColor: Colors.primaryColor },
          type === 'fill' && { backgroundColor: Colors.white },
          type === 'outline' && {
            backgroundColor: Colors.white,
            borderColor: Colors.textGray200,
            borderWidth: 1,
          },
          type === 'clear' && { backgroundColor: 'transparent' },
          type === 'link' && { backgroundColor: 'transparent' },
          { borderRadius: radius, height: height },
          buttonStyle,
        ]}
        titleStyle={[
          type === 'primary' && { color: Colors.white },
          type === 'fill' && { color: Colors.primary },
          type === 'outline' && { color: Colors.textGray200 },
          type === 'clear' && { color: Colors.textGray200 },
          type === 'link' && { color: Colors.primary },
          { textAlign: 'center' },
        ]}
      />
    </View>
  );
};

export default Button;
