import React from 'react';
import { Platform } from 'react-native';
import { ButtonGroup as ButtonGroupComponent } from '@rneui/themed';
import { View, StyleSheet, FlexAlignType } from 'react-native';
import { useTheme } from '../../hooks';

type ButtonGroupProps = {
  type?: 'fill' | 'primary' | 'outline' | 'link' | 'clear';
  align?: 'center' | 'left' | 'right' | 'auto' | 'justify';
  viewStyle?: any;
  buttons: string[];
  onPress: (value: number) => void;
  selectedIndex: number;
};

const ButtonGroup = ({
  align = 'left',
  viewStyle,
  buttons,
  onPress,
  selectedIndex,
}: ButtonGroupProps) => {
  const styles = StyleSheet.create({
    container: {
      alignItems: align as FlexAlignType,
    },
  });
  const { Fonts, darkMode } = useTheme();

  const shadowStyle = Platform.select({
    ios: {
      shadowColor: Fonts.colorPrimary,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    android: {
      elevation: 3,
    },
  });
  return (
    <View style={[styles.container, viewStyle]}>
      <ButtonGroupComponent
        buttons={buttons}
        selectedIndex={selectedIndex}
        onPress={value => {
          onPress(value);
        }}
        containerStyle={{
          marginBottom: 20,
          backgroundColor: '#F2F4F3',
          padding: 5,
          height: 48,
          borderRadius: 7,
          borderWidth: 0,
        }}
        selectedButtonStyle={[
          shadowStyle as any,
          {
            backgroundColor: '#fff',
            borderRadius: 8,
          },
        ]}
        selectedTextStyle={{ color: '#2B2B2B' }}
        activeOpacity={0}
        innerBorderStyle={{ width: 0 }}
      />
    </View>
  );
};

export default ButtonGroup;
