import React, { useRef, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Brand } from '../../components';
import { useTheme, useToast } from '../../hooks';
import { useDoLoginMutation } from '../../services/modules/auth';

import { setToken } from '../../store/auth';
import { Image, InputForm, InputPassword } from '../../components';
import { Button } from '@rneui/themed';
import { Avatar } from '@rneui/themed';
import { buttonGroup, registerButtonGroup } from './ulities';
import { DefaultVariables } from '../../theme/index';

import BottomDrawer, {
  BottomDrawerMethods,
} from 'react-native-animated-bottom-drawer';

import { Layout as Container } from '../../components';
import { ApplicationScreenProps } from '../../../@types/navigation';

const { Colors, Width, Icons } = DefaultVariables

const Login = ({ navigation }: ApplicationScreenProps) => {
  const [userNumber, onChangeUserNumber] = useState('tpazyot127@gmail.com');
  const [userPassword, onChangeUserPassword] = useState('123123');
  const { showToast } = useToast({ message: 'Login Success', type: 'success' });
  const bottomDrawerRef = useRef<BottomDrawerMethods>(null);

  const { t } = useTranslation(['login']);
  const { Fonts, Gutters, Layout, darkMode: isDark } = useTheme();
  const dispatch = useDispatch();

  const [doLogin, { data, isSuccess, isLoading }] = useDoLoginMutation();

  const buttonGroupItems = buttonGroup({
    userNumber: userNumber,
    userPassword: userPassword,
    label: {
      loginButton: t('login:login-button'),
      registerButton: t('login:register-button'),
    },
  });

  const regButtonGroupItems = registerButtonGroup({
    registerButton: t('login:register'),
    agency: t('login:agency'),
    agencyEmployee: t('login:agencyEmployee'),
  });
  const openBottomDrawer = () => {
    return bottomDrawerRef?.current?.open();
  };

  const onLogin = async () => {
    try {
      await doLogin({
        email: userNumber,
        password: userPassword,
        role: 'USER',
      }).unwrap();
      if (isSuccess && data) {
        dispatch(
          setToken({
            accessToken: data?.access_token,
            refreshToken: data?.refresh_token,
          }),
        );

        showToast();
      }
    } catch (e) {
      console.log('Error:', e);
    }
  };

  const onPressAgency = (name: string) => {
    bottomDrawerRef?.current?.close();
    navigation.navigate('Register');
  };
  //
  // const onPressEmployee = () => {
  //   navigation.navigate('RegisterAgency');
  // };
  const renderRegisterButton = () => (
    <View
      style={[
        Layout.fullHeight,
        Layout.fill,
        Layout.colSeperate,
        {
          backgroundColor: Colors.white,
        },
      ]}
    >
      <View
        style={[
          Layout.center,
          Layout.fullWidth,
          Layout.justifyContentAround,
          Layout.row,
        ]}
      >
        {regButtonGroupItems.map((item, index) => (
          <View key={index} style={[Layout.center]}>
            <Avatar
              size={item.avatarSize}
              rounded
              icon={{ name: item.icon, type: item.iconType }}
              containerStyle={{ backgroundColor: item.avatarBg }}
            />
            <Text
              style={[
                Fonts.textSmall,
                Fonts.textBold,
                Gutters.superTinyBPadding,
              ]}
            >
              {item.text}
            </Text>
            <Button
              buttonStyle={{ ...item.buttonStyle }}
              containerStyle={{ ...item.containerStyle }}
              title={isLoading ? <ActivityIndicator /> : item.title}
              type={item.type}
              onPress={() => onPressAgency('Register')}
              titleStyle={{ ...item.titleStyle }}
            />
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <Container>
      <View
        style={[
          Layout.fullHeight,
          Layout.fill,
          Layout.colSeperate,
          {
            backgroundColor: isDark ? Colors.backgroundDark : Colors.white,
          },
        ]}
      >
        <View
          style={[
            Layout.center,
            Layout.fullWidth,
            Layout.justifyContentBetween,
          ]}
        >
          <Brand height={200} width={200} />
          <InputForm
            text={userNumber}
            onChangeText={onChangeUserNumber}
            icon={Icons.phone}
            keyboardType="numeric"
            styles={{ width: Width.medium }}
            placeholder={t('login:phone-input')}
          />

          <InputPassword
            text={userPassword}
            onChangeText={onChangeUserPassword}
            styles={{ width: Width.medium }}
            placeholder={t('login:password-input')}
          />

          {buttonGroupItems.map((item, index) => (
            <View key={index}>
              {item.type === 'clear' ? (
                <Button
                  buttonStyle={[Layout.fill]}
                  containerStyle={{ ...item.containerStyle }}
                  title={item.title}
                  type={item.type}
                  titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
                />
              ) : (
                <Button
                  title={item.title}
                  buttonStyle={{ ...item.buttonStyle }}
                  containerStyle={{ ...item.containerStyle }}
                  type={item.type}
                  onPress={() =>
                    item.buttonType === 'register'
                      ? openBottomDrawer()
                      : onLogin()
                  }
                  titleStyle={{ ...item.titleStyle }}
                />
              )}
            </View>
          ))}
        </View>
        <BottomDrawer initialHeight={200} ref={bottomDrawerRef}>
          {renderRegisterButton()}
        </BottomDrawer>
        <Image height={300} width={'100%'} src="flight" />
      </View>
    </Container>
  );
};

export default Login;
