import React, { CSSProperties } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@/hooks';
import { useTranslation } from 'react-i18next';
import { Plane, Hotel, Ticket } from '@/theme/assets/icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

type BoxWalletProps = {
  style?: CSSProperties;
  navigation: any;
};
const iconStyle = 90;
const MainBody = ({ navigation }: BoxWalletProps) => {
  const { Fonts, Layout, darkMode: isDark } = useTheme();
  const { t } = useTranslation(['dashboard']);

  const listIcon = [
    {
      icon: <Plane width={iconStyle} height={iconStyle} />,
      label: t('dashboard:plane'),
      onPress: () => navigation.navigate('PlaneOrder'),
    },
    {
      icon: <Hotel width={iconStyle} height={iconStyle} />,
      label: t('dashboard:hotel'),
      onPress: () => navigation.navigate('HotelOrder'),
    },
    {
      icon: <Ticket width={iconStyle} height={iconStyle} />,
      label: t('dashboard:tour'),
      onPress: () => console.log('onPress'),
    },
  ];
  return (
    <View style={[Layout.row, Layout.justifyContentBetween]}>
      {listIcon.map((item, index) => (
        <TouchableOpacity
          onPress={item.onPress}
          style={[Layout.alignItemsCenter]}
          key={index}
        >
          {item.icon}
          <Text style={[Fonts.textTiny]}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MainBody;
