import React from 'react';
// import { Dashboard } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './BottomTabNavigator';

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Dashboard"
        component={BottomTab}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
