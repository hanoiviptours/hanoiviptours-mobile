import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ApplicationScreenProps } from '../../@types/navigation';
import { Icon } from '@rneui/themed';

import { useTheme } from '../hooks';
import { useNavigation } from '@react-navigation/native';
import { DefaultVariables } from '../theme/index';
const { Colors, FontSize } = DefaultVariables;

type HeaderProps = {
  title: string;
  style?: any;
};
const Header = ({ title, style }: HeaderProps) => {
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

        {
          paddingHorizontal: 16,
          paddingVertical: 8,
          backgroundColor: Colors.white,
          borderBottomWidth: 2,
          borderBottomColor: Colors.textGray200,
          ...style,
        },
      ]}
    >
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
