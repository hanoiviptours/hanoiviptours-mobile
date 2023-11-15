import * as React from 'react';
import { Button as RNButton } from '@rneui/themed';
import { View, StyleSheet, FlexAlignType } from 'react-native';
import { useTheme } from '../../hooks';

type ButtonProps = {
  type: 'primary' | 'fill' | 'outline' | 'clear' | 'link';
  align?: 'center' | 'left' | 'right' | 'auto' | 'justify';
  viewStyle?: any;
  buttonStyle?: any;
  title: string;
  radius: number;
};

const Button = ({
  type,
  align = 'left',
  viewStyle,
  buttonStyle,
  title,
  radius = 0,
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
        containerStyle={{
          width: '90%',
          height: 40,
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
          { borderRadius: radius },
          buttonStyle,
        ]}
        titleStyle={[
          type === 'primary' && { color: Colors.white },
          type === 'fill' && { color: Colors.primary },
          type === 'outline' && { color: Colors.textGray200 },
          type === 'clear' && { color: Colors.textGray200 },
          type === 'link' && { color: Colors.primary },
        ]}
      />
    </View>
  );
};

export default Button;
