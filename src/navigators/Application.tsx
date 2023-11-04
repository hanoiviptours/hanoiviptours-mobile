import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useTheme } from '../hooks';
import MainNavigator from './Main';
import AuthNavigator from './Auth';
import { AuthState } from '../store/auth';
import { Startup } from '../screens';

import { useFlipper } from '@react-navigation/devtools';
import { ApplicationStackParamList } from '../../@types/navigation';
import { DefaultVariables } from '../theme/index';

const Stack = createStackNavigator<ApplicationStackParamList>();

const { Colors } = DefaultVariables;
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();

  const accessToken = useSelector(
    (state: { auth: AuthState }) => state.auth.accessToken,
  );

  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);

  return (
    <SafeAreaView
      style={[
        Layout.fill,
        {
          marginBottom: accessToken ? -60 : -100,
          backgroundColor: Colors.white,
        },
      ]}
    >
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />

        <Stack.Screen name="Startup" component={Startup} />
        {accessToken ? <MainNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
