import React from 'react';
import { View, Text, useWindowDimensions } from 'react-native';
import { useTheme } from '@/hooks';
import { ShadowBox } from '@/components';
import { Icon, IconBox } from '@/components';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DefaultVariables } from '@/theme/index';
import Wallet from '@/theme/assets/icons/wallet.svg';
import WalletPrimary from '@/theme/assets/icons/wallet-primary.svg';
const { Colors } = DefaultVariables;

type BoxWalletProps = {
  style?: any;
  navigation: any;
};
const BoxWallet = ({ style, navigation }: BoxWalletProps) => {
  const { Layout, Gutters, Fonts, darkMode: isDark } = useTheme();
  const { width, height } = useWindowDimensions();

  const { t } = useTranslation(['dashboard']);

  const iconBoxes = [
    {
      type: 'material-community',
      name: 'wallet',
      size: 25,
      color: Colors.primaryColor,
      svg: null,
      text: t('dashboard:topup'),
      onPress: () => navigation.navigate('Topup'),
    },
    {
      type: 'svg',
      name: '',
      size: 25,
      color: Colors.primaryColor,
      svg: <WalletPrimary width={25} height={25} />,
      text: t('dashboard:transaction'),
      onPress: () => console.log('onPress'),
    },
  ];
  return (
    <ShadowBox
      style={[
        Layout.fill,
        {
          width: width * 0.9,
          height: height * 0.07,
          backgroundColor: Colors.white,
          borderRadius: 5,
          marginTop: -height * 0.05,
        },
        style,
      ]}
    >
      <View
        style={[
          Layout.row,
          Layout.fullHeight,
          Layout.fullWidth,
          Layout.justifyContentBetween,
        ]}
      >
        <View style={[Layout.row]}>
          <TouchableOpacity
            style={[
              Layout.fill,
              Layout.row,
              Layout.alignItemsCenter,
              { paddingLeft: 10 },
            ]}
          >
            <Wallet width={30} height={30} />
            <Text style={[Fonts.textTiny, Gutters.tinyLPadding]}>144 d</Text>
            <Icon
              name={'chevron-right'}
              size={20}
              type={'material-community'}
              color={Colors.textGray200}
            />
          </TouchableOpacity>
        </View>
        <View style={[Layout.row]}>
          {iconBoxes.map((item, index) => (
            <View style={[Layout.col, { paddingLeft: 20 }]} key={index}>
              <IconBox
                styles={[Layout.center, Layout.justifyContentCenter]}
                textStyles={[Fonts.textTiny, Layout.center]}
                icon={{
                  type: item.type,
                  name: item.name,
                  size: item.size,
                  color: item.color,
                  svg: item.svg,
                }}
                text={item.text}
                onPress={item.onPress}
              />
            </View>
          ))}
        </View>
      </View>
    </ShadowBox>
  );
};

export default BoxWallet;
