import React from 'react';
// import { Dashboard } from '../screens';
import { View, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './BottomTabNavigator';
import Topup from '@/screens/Payments/Topup';
import Header from './Header';
import { useTranslation } from 'react-i18next';

const Stack = createStackNavigator();

const paddingTop = Platform.OS === 'ios' ? '15%' : 0;
// @refresh reset
const MainNavigator = () => {
  const { t } = useTranslation(['header']);
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Dashboard"
        component={BottomTab}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => (
            <Header
              style={{ paddingTop: paddingTop }}
              title={t('header:topup')}
            />
          ),
        }}
        name="Topup"
        component={Topup}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
