import React, { CSSProperties } from 'react';
import { View, Text, useWindowDimensions } from 'react-native';
import { useTheme } from '@/hooks';
import { useTranslation } from 'react-i18next';
import { Plane, Hotel, Ticket } from '@/theme/assets/icons';

type BoxWalletProps = {
  style?: CSSProperties;
};
const iconStyle = 90;
const MainBody = ({ style }: BoxWalletProps) => {
  const { Fonts, Layout, darkMode: isDark } = useTheme();
  // const { width, height } = useWindowDimensions();
  const { t } = useTranslation(['dashboard']);

  const listIcon = [
    {
      icon: <Plane width={iconStyle} height={iconStyle} />, // adjust the values as needed
      label: t('dashboard:plane'),
    },
    {
      icon: <Hotel width={iconStyle} height={iconStyle} />, // adjust the values as needed
      label: t('dashboard:hotel'),
    },
    {
      icon: <Ticket width={iconStyle} height={iconStyle} />, // adjust the values as needed
      label: t('dashboard:tour'),
    },
  ];
  return (
    <View style={[Layout.row, Layout.justifyContentBetween]}>
      {listIcon.map((item, index) => (
        <View style={[Layout.alignItemsCenter]} key={index}>
          {item.icon}
          <Text style={[Fonts.textTiny]}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
};

export default MainBody;
