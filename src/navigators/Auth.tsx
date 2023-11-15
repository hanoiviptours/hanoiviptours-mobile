import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Platform } from 'react-native';
import { Login, RegisterAgency } from '../screens';
import { AuthStackParamList } from 'types/navigation';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks';
import Header from './Header';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { t } = useTranslation(['header']);

  const paddingTop = Platform.OS === 'ios' ? '15%' : '5%';

  return (
    <View style={[Layout.fill, { paddingTop }]}>
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
    </View>
  );
};

export default AuthNavigator;
