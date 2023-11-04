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
};
const Header = ({ title }: HeaderProps) => {
  const navigation = useNavigation();
  const { Layout, darkMode: isDark } = useTheme();
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
        },
      ]}
    >
      <TouchableOpacity onPress={handleGoBack}>
        <Icon name="arrow-back" size={24} color="#333" type={'material'} />
      </TouchableOpacity>
      <Text style={{ fontSize: FontSize.regular, color: '#333' }}>{title}</Text>
      <View style={{ width: 24 }} />
    </View>
  );
};

export default Header;
