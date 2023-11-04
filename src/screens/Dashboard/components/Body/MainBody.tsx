import React, { CSSProperties } from 'react';
import { View, Text, useWindowDimensions } from 'react-native';
import { useTheme } from '@/hooks';
import { ShadowBox } from '@/components';
import { Colors } from '@/theme/Variables';
import { useTranslation } from 'react-i18next';
import { Layout } from 'react-native-reanimated';

type BoxWalletProps = {
  style?: CSSProperties;
};
const MainBody = ({ style }: BoxWalletProps) => {
  const { Layout, darkMode: isDark } = useTheme();
  // const { width, height } = useWindowDimensions();
  const { t } = useTranslation(['dashboard']);

  const listIcon = [
    {
      icon: 'plane',
      label: t('dashboard:plane'),
    },
    {
      icon: 'icon',
      label: t('dashboard:hotel'),
    },
    {
      icon: 'icon',
      label: t('dashboard:tour'),
    },
  ];
  return (
    <View
      style={[
        Layout.fullWidth,
        Layout.row,
        Layout.justifyContentBetween,
        { paddingLeft: 20, paddingRight: 20 },
      ]}
    >
      {listIcon.map((item, index) => (
        <View>
          <Text>{item.label}</Text>
        </View>
      ))}
    </View>
  );
};

export default MainBody;
