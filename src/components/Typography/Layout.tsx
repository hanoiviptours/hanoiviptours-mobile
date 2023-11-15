import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useTheme } from '../../hooks';
import { changeTheme, ThemeState } from '../../store/theme';
import i18next from 'i18next';
import { DefaultVariables } from '../../theme/index';
import Icon from './Icon';

const { Colors, Icons } = DefaultVariables;
const Layout = ({ children }: any) => {
  const { Gutters, Layout, darkMode: isDark } = useTheme();

  const dispatch = useDispatch();
  const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }));
  };

  const onChangeLanguage = (lang: 'vi' | 'en') => {
    i18next.changeLanguage(lang);
  };

  return (
    <KeyboardAvoidingView
      style={[
        Layout.fullHeight,
        Layout.fill,
        Layout.colSeperate,
        {
          backgroundColor: isDark ? Colors.backgroundDark : Colors.white,
        },
      ]}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <View style={[Layout.colRowRight]}>
            <View style={[Layout.row, Gutters.regularRPadding]}>
              <Icon
                name={Icons.switchTheme}
                size={30}
                setState={() => onChangeTheme({ darkMode: !isDark })}
                type={'material-community'}
                color={isDark ? Colors.white : Colors.textGray400}
              />
              <Icon
                name={Icons.translate}
                size={30}
                setState={() =>
                  onChangeLanguage(i18next.language === 'vi' ? 'en' : 'vi')
                }
                color={isDark ? Colors.white : Colors.textGray400}
              />
            </View>
          </View>
          {children}
        </>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Layout;
