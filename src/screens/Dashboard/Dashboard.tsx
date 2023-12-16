import React, { useCallback, useMemo } from 'react';
import { View, ScrollView, useWindowDimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Brand } from '@/components'; // updated import
import { useTheme } from '@/hooks'; // updated import
import { Colors } from '@/theme/Variables'; // updated import
import BoxHeader from './components/Header/BoxHeader';
import MainBody from './components/Body/MainBody';
import { useGetUserInfoQuery } from '@/services/modules/users/index';

const Dashboard = ({ navigation }: any) => {
  // const { height } = useWindowDimensions();
  // const { t } = useTranslation(['example']);
  const {
    // Common,
    // Fonts,
    Gutters,
    Layout,
    // Images,
    darkMode: isDark,
  } = useTheme();
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetUserInfoQuery('bulbasaur');

  // const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
  //   dispatch(changeTheme({ theme, darkMode }));
  // };
  //
  // const onChangeLanguage = (lang: 'fr' | 'en') => {
  //   i18next.changeLanguage(lang);
  // };
  //
  return (
    <ScrollView style={[Layout.fill, { backgroundColor: Colors.textGray100 }]}>
      <View
        style={[
          Layout.center,
          Layout.fullWidth,
          Layout.justifyContentStart,
          { backgroundColor: Colors.white },
        ]}
      >
        <BoxHeader navigation={navigation} />
      </View>
      <View
        style={[
          Layout.fill,
          Layout.col,
          Gutters.smallMargin,
          // { paddingLeft: 20, paddingRight: 20 },
        ]}
      >
        <MainBody navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default Dashboard;
