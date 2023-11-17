import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';
import { Dashboard } from '../screens';
import { useTheme } from '../hooks';
import { Icon } from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { DefaultVariables } from '../theme/index';
const { Colors } = DefaultVariables;

const Tab = createMaterialBottomTabNavigator();
const BottomTab = () => {
  const { Layout, Images, Gutters } = useTheme();
  const navigation = useNavigation();
  const { t } = useTranslation(['commonText']);

  const height = Platform.OS === 'ios' ? 80 : 70;
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={Colors.primaryColor}
      inactiveColor={Colors.textGray400}
      barStyle={{
        backgroundColor: Colors.white,
        borderTopColor: Colors.textGray200,
        borderTopWidth: 0.25,
        height: height,
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: t('commonText:home'),
          tabBarIcon: ({ color }) => (
            <Icon
              color={color}
              name="home-assistant"
              size={35}
              type="material-community"
            />
          ),
        }}
      >
        {() => <Dashboard navigation={navigation} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};
export default BottomTab;
