import React, { useCallback } from 'react';
import {
  Topup,
  PlaneList,
  PlaneOrder,
  PlaneDetail,
  PlaneCheckout,
} from '../screens';
import { Icon } from '@rneui/themed';
import { Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './BottomTabNavigator';
import Header from './Header';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import { Colors } from '@/theme/Variables';
import { setSteps } from '@/store/checkoutsteps';

const Stack = createStackNavigator();

const paddingTop = Platform.OS === 'ios' ? '15%' : 0;

const mainNavigatorOptions = (
  t: TFunction,
  handleCheckoutStepsGoBack?: () => void,
) => [
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
        style={{ paddingTop: paddingTop }}
        title={t('header:planeDetails')}
      />
    ),
    name: 'PlaneDetail',
    component: PlaneDetail,
  },
  {
    headerShown: true,
    header: () => (
      <Header
        style={{ paddingTop: paddingTop }}
        title={t('header:planeCheckout')}
        onPress={handleCheckoutStepsGoBack}
      />
    ),
    name: 'PlaneCheckout',
    component: PlaneCheckout,
  },
];

const MainNavigator = () => {
  const { t } = useTranslation(['header']);
  const currentCheckoutSteps = useSelector((state: any) => state.steps);
  const dispatch = useDispatch();

  const handleCheckoutStepsGoBack = useCallback(() => {
    if (currentCheckoutSteps.steps > 0) {
      dispatch(setSteps({ steps: currentCheckoutSteps.steps - 1 }));
    }
  }, [currentCheckoutSteps]);

  const navigators = mainNavigatorOptions(t, handleCheckoutStepsGoBack);
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
