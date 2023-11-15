import React, { useRef, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { Button } from '@rneui/themed';
import { Avatar } from '@rneui/themed';
import { DefaultVariables } from '../../../theme/index';
import { useTheme } from '../../../hooks';
import { registerButtonGroup } from '../ulities';
import { useTranslation } from 'react-i18next';

const { Colors } = DefaultVariables;

type RenderRegisterButtonProps = {
  isLoading?: boolean;
  onPressAgency: (state: any) => void;
};

const RenderRegisterButton: React.FC<RenderRegisterButtonProps> = ({
  isLoading,
  onPressAgency,
}) => {
  const { Fonts, Gutters, Layout, darkMode: isDark } = useTheme();

  const { t } = useTranslation(['login']);

  const regButtonGroupItems = registerButtonGroup({
    registerButton: t('login:register'),
    agency: t('login:agency'),
    agencyEmployee: t('login:agencyEmployee'),
  });

  return (
    <View
      style={[
        Layout.fullHeight,
        Layout.fill,
        Layout.colSeperate,
        {
          backgroundColor: Colors.white,
        },
      ]}
    >
      <View
        style={[
          Layout.center,
          Layout.fullWidth,
          Layout.justifyContentAround,
          Layout.row,
        ]}
      >
        {regButtonGroupItems.map((item, index) => (
          <View key={index} style={[Layout.center]}>
            <Avatar
              size={item.avatarSize}
              rounded
              icon={{ name: item.icon, type: item.iconType }}
              containerStyle={{ backgroundColor: item.avatarBg }}
            />
            <Text
              style={[
                Fonts.textSmall,
                Fonts.textBold,
                Gutters.superTinyBPadding,
              ]}
            >
              {item.text}
            </Text>
            <Button
              buttonStyle={{ ...item.buttonStyle }}
              containerStyle={{ ...item.containerStyle }}
              title={isLoading ? <ActivityIndicator /> : item.title}
              // type={item.type}
              onPress={() => onPressAgency('Register')}
              titleStyle={{ ...item.titleStyle }}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default RenderRegisterButton;
