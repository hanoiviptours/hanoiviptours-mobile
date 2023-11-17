import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from '@rneui/themed';

import { useTheme } from '../hooks';
import { useNavigation } from '@react-navigation/native';
import { DefaultVariables } from '../theme/index';
const { Colors, FontSize } = DefaultVariables;

type HeaderProps = {
  title: string;
  style?: any;
  borderBottom?: boolean;
};
const Header = ({ title, style, borderBottom }: HeaderProps) => {
  const navigation = useNavigation();
  const { Layout, Fonts, darkMode: isDark } = useTheme();
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View
      style={[
        Layout.rowCenter,
        Layout.justifyContentBetween,
        borderBottom && {
          borderBottomWidth: 2,
          borderBottomColor: Colors.textGray200,
        },
        {
          paddingHorizontal: 16,
          paddingVertical: 8,
          backgroundColor: Colors.white,
          ...style,
        },
      ]} >
      <TouchableOpacity onPress={handleGoBack}>
        <Icon
          name="chevron-left"
          size={35}
          color={Colors.primaryColor}
          type={'material'}
        />
      </TouchableOpacity>
      <Text style={[Fonts.textRegular]}>{title}</Text>
      <View style={{ width: 24 }} />
    </View>
  );
};

export default Header;
