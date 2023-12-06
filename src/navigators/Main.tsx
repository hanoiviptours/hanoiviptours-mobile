import React from 'react';
import { Topup, PlaneList, PlaneOrder, PlaneDetail } from '../screens';
import { Icon } from '@rneui/themed';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './BottomTabNavigator';
import Header from './Header';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import { Colors } from '@/theme/Variables';

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
  {
    headerShown: true,
    header: (props: any) => (
      <Header
        style={{ paddingTop: paddingTop }}
        title={props.route.params?.title}
        subTitle={props.route.params?.subTitle}
        borderBottom
        rightIcon={
          <Icon
            name="edit-note"
            size={30}
            color={Colors.primaryColor}
            type="material"
          />
        }
      />
    ),
    name: 'PlaneList',
    component: PlaneList,
  },
  {
    headerShown: true,
    header: () => (
      <Header
        borderBottom
        style={{ paddingTop: paddingTop }}
        title={t('header:planeDetails')}
      />
    ),
    name: 'PlaneDetail',
    component: PlaneDetail,
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
