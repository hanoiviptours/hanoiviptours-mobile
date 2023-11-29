import React, { useRef, useCallback, useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Brand } from '../../components';
import { useTheme, useToast } from '../../hooks';
import { useDoLoginMutation } from '../../services/modules/auth';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { setToken } from '../../store/auth';
import {
  Image,
  InputForm,
  Button,
  InputPassword,
  BottomDrawer,
} from '../../components';
import { buttonGroup } from './ulities';
import { DefaultVariables } from '../../theme/index';
import RenderRegisterButton from './components/RenderRegisterButton';

import { Layout as Container } from '../../components';
import { ApplicationScreenProps } from '../../../@types/navigation';

const { Colors, Width, Icons } = DefaultVariables;

const Login = ({ navigation }: ApplicationScreenProps) => {
  const [userNumber, onChangeUserNumber] = useState('');
  const [userPassword, onChangeUserPassword] = useState('');

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const { showToast } = useToast({ message: 'Login Success', type: 'success' });

  const { t } = useTranslation(['login']);
  const { Layout, darkMode: isDark } = useTheme();
  const dispatch = useDispatch();

  const [doLogin, { data, isSuccess, isLoading }] = useDoLoginMutation();

  const buttonGroupItems = buttonGroup({
    label: {
      loginButton: t('login:login-button'),
      registerButton: t('login:register-button'),
    },
  });

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

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const onPressAgency = (name: string) => {
    bottomSheetModalRef.current?.close();
    navigation.navigate('Register');
  };

  return (
    <>
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
            style={[Layout.fullHeight, Layout.col, Layout.alignItemsCenter]}
          >
            <Brand height={200} width={200} />
            <InputForm
              onChangeText={onChangeUserNumber}
              icon={Icons.phone}
              keyboardType="numeric"
              styles={{ width: Width.medium }}
              placeholder={t('login:phone-input')}
            />

            <InputPassword
              onChangeText={onChangeUserPassword}
              styles={{ width: Width.medium }}
              placeholder={t('login:password-input')}
            />

            {buttonGroupItems.map((item, index) => (
              <View key={index} style={[Layout.fullWidth]}>
                {item.type === 'clear' ? (
                  <Button
                    viewStyle={{}}
                    title={item.title}
                    type={item.type}
                    align="center"
                    radius={30}
                  />
                ) : (
                  <Button
                    viewStyle={{}}
                    disabled={
                      item.buttonType === 'login' &&
                      userNumber === '' &&
                      userPassword === ''
                    }
                    title={item.title}
                    type={item.type}
                    align="center"
                    onPress={
                      item.buttonType === 'register'
                        ? handlePresentModalPress
                        : onLogin
                    }
                    radius={30}
                  />
                )}
              </View>
            ))}
          </View>
        </View>

        <View style={[Layout.justifyContentEnd]}>
          <Image height={200} styles={{}} width={'100%'} src="flight" />
        </View>
      </Container>

      <BottomDrawer snapPoint="25%" ref={bottomSheetModalRef}>
        <RenderRegisterButton
          isLoading={isLoading}
          onPressAgency={onPressAgency}
        />
      </BottomDrawer>
    </>
  );
};

export default Login;
