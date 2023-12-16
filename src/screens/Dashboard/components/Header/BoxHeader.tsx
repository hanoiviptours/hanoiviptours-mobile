import React, { useEffect } from 'react';
import { View, useWindowDimensions, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { GradientBox, Icon, Avatar } from '@/components';
import BoxWallet from './BoxWallet';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { clearToken } from '../../../../store/auth';
import { DefaultVariables, Gutters } from '@/theme/index';
import { headerButtons } from '../../ulities';
const { Colors, Icons } = DefaultVariables;

const BoxHeader = ({ navigation }: any) => {
  const { Layout, Gutters, darkMode: isDark } = useTheme();
  const { height } = useWindowDimensions();
  const { t } = useTranslation(['example']);
  const dispatch = useDispatch();

  const onLogout = async () => {
    try {
      dispatch(clearToken());
    } catch (e) {
      console.log('Error:', e);
    }
  };
  const buttons = headerButtons();
  return (
    <>
      <GradientBox>
        <View style={[Layout.fill]}>
          <View
            style={[
              Layout.row,
              Layout.center,
              Layout.justifyContentBetween,
              { paddingTop: 60, paddingLeft: 30, paddingRight: 30 },
            ]}
          >
            <View style={[Layout.row]}>
              <TouchableOpacity
                onPress={onLogout}
                style={[Gutters.tinyRPadding]}
              >
                <Avatar
                  size={40}
                  userName="Tuan Anh"
                  titleStyles={{ color: Colors.textGray200 }}
                  styles={{
                    backgroundColor: Colors.white,
                  }}
                />
              </TouchableOpacity>
              {buttons.map((item, index) => (
                <View key={index}>
                  {item.route === 'info' ? (
                    <Text
                      style={[
                        {
                          color: Colors.white,
                        },
                      ]}
                    >
                      {item.title}
                    </Text>
                  ) : null}
                </View>
              ))}
            </View>
            <View style={[Layout.row, Layout.justifyContentBetween]}>
              {buttons.map((item, index) => (
                <Icon
                  key={index}
                  name={item.icon}
                  size={25}
                  type={'material-community'}
                  color={Colors.white}
                />
              ))}
            </View>
          </View>
        </View>
      </GradientBox>

      <BoxWallet navigation={navigation} />
    </>
  );
};

export default BoxHeader;
