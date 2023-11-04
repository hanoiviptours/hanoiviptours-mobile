import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Dashboard } from '../screens';
import { useTheme } from '../hooks';
import { Icon } from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { DefaultVariables } from '../theme/index';
const { Colors, FontSize } = DefaultVariables;

const Tab = createMaterialBottomTabNavigator();
const BottomTab = () => {
  const { Layout, Images, Gutters } = useTheme();

  const { t } = useTranslation(['commonText']);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={Colors.primaryColor}
      inactiveColor={Colors.textGray400}
      barStyle={{
        backgroundColor: Colors.white,
        borderTopColor: Colors.textGray200,
        borderTopWidth: 0.25,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
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
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
