import React, { useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from '@rneui/themed';
import { useSelector } from 'react-redux';

import { useTheme } from '../hooks';
import { useNavigation } from '@react-navigation/native';
import { DefaultVariables } from '../theme/index';
const { Colors, FontSize } = DefaultVariables;

type HeaderProps = {
  title: string;
  rightIcon?: React.ReactNode;
  handleRightIcon?: () => void;
  subTitle?: string;
  style?: any;
  onPress?: () => void;
  borderBottom?: boolean;
};
const Header = ({
  title,
  subTitle,
  style,
  borderBottom,
  rightIcon,
  onPress,
  handleRightIcon,
}: HeaderProps) => {
  const navigation = useNavigation();
  const { Layout, Fonts, darkMode: isDark } = useTheme();
  const currentCheckoutSteps = useSelector((state: any) => state.steps);

  const handleGoBack = useCallback(() => {
    if (onPress && currentCheckoutSteps.steps > 0) {
      onPress();
    } else {
      navigation.goBack();
    }
  }, [navigation, onPress, currentCheckoutSteps.steps]);

  return (
    <View
      style={[
        Layout.rowCenter,
        Layout.justifyContentBetween,
        borderBottom && {
          borderBottomWidth: 0.75,
          borderBottomColor: Colors.textGray200,
        },
        {
          paddingHorizontal: 16,
          paddingVertical: 8,
          backgroundColor: Colors.white,
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

      <View style={[Layout.col, Layout.center]}>
        <Text style={[Fonts.textRegular]}>{title}</Text>

        {subTitle ? (
          <Text style={[Fonts.textTiny, { color: Colors.textGray200 }]}>
            {subTitle}
          </Text>
        ) : null}
      </View>

      {!subTitle && <View style={{ width: 24 }} />}

      {rightIcon ? (
        <TouchableOpacity onPress={handleRightIcon}>
          {rightIcon}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Header;
