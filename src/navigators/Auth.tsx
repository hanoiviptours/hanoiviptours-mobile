import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, RegisterAgency } from '../screens';
import { AuthStackParamList } from 'types/navigation';
import { useTranslation } from 'react-i18next';
import Header from './Header';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  const { t } = useTranslation(['header']);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Register"
        component={RegisterAgency}
        options={{
          headerShown: true,
          header: () => <Header title={t('header:register')} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
