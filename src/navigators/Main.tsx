import React from 'react';
import { Topup, PlaneOrder } from '../screens';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './BottomTabNavigator';
import Header from './Header';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

const Stack = createStackNavigator();

const paddingTop = Platform.OS === 'ios' ? '15%' : 0;

const mainNavigatorOptions = (t: TFunction) => [
  {
    headerShown: false,
    name: 'Dashboard',
    header: () => <></>,
    component: BottomTab,
  },
  {
    headerShown: true,
    header: () => (
      <Header
        borderBottom={true}
        style={{ paddingTop: paddingTop }}
        title={t('header:topup')}
      />
    ),
    name: 'Topup',
    component: Topup,
  },
  {
    headerShown: true,
    header: () => (
      <Header style={{ paddingTop: paddingTop }} title={t('header:plane')} />
    ),
    name: 'PlaneOrder',
    component: PlaneOrder,
  },
];

const MainNavigator = () => {
  const { t } = useTranslation(['header']);
  const navigators = mainNavigatorOptions(t);
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      {navigators.map((item, index) => (
        <Stack.Screen
          key={index}
          options={{
            headerShown: item.headerShown,
            header: item.header,
          }}
          name={item.name}
          component={item.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default MainNavigator;
