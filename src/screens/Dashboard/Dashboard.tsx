import React, { useCallback, useMemo } from 'react';
import { View, ScrollView, useWindowDimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Brand } from '@/components'; // updated import
import { useTheme } from '@/hooks'; // updated import
import { Colors } from '@/theme/Variables'; // updated import
import BoxHeader from './components/Header/BoxHeader';
import MainBody from './components/Body/MainBody';

const Dashboard = () => {
  // const { height } = useWindowDimensions();
  // const { t } = useTranslation(['example']);
  const {
    // Common,
    // Fonts,
    // Gutters,
    Layout,
    // Images,
    darkMode: isDark,
  } = useTheme();
  const dispatch = useDispatch();

  // const [fetchOne, { data, isSuccess, isLoading, isFetching }] =
  //   useLazyFetchOneQuery();

  // const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
  //   dispatch(changeTheme({ theme, darkMode }));
  // };
  //
  // const onChangeLanguage = (lang: 'fr' | 'en') => {
  //   i18next.changeLanguage(lang);
  // };
  //
  return (
    <ScrollView
      style={[Layout.fill, { backgroundColor: Colors.textGray100 }]}
      contentContainerStyle={[
        Layout.fullSize,
        Layout.fill,
        Layout.colCenter,
        Layout.scrollSpaceBetween,
      ]}
    >
      <View
        style={[Layout.center, Layout.fullWidth, Layout.justifyContentStart]}
      >
        <BoxHeader />
        <MainBody />
      </View>
    </ScrollView>
  );
};

export default Dashboard;
