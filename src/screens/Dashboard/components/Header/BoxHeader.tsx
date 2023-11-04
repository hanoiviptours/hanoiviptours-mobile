import React, { useEffect } from 'react';
import { View, useWindowDimensions, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { changeTheme, ThemeState } from '@/store/theme';
import i18next from 'i18next';
import { GradientBox } from '@/components';
import BoxWallet from './BoxWallet';

const BoxHeader = () => {
  const { height } = useWindowDimensions();
  const { t } = useTranslation(['example']);
  const { Layout, darkMode: isDark } = useTheme();
  const dispatch = useDispatch();

  return (
    <>
      <GradientBox style={[Layout.fullWidth, { display: 'flex' }]}>
        <View style={[Layout.fill]}>
          <View
            style={[
              Layout.row,
              Layout.center,
              Layout.justifyContentBetween,
              { padding: 30 },
            ]}
          >
            <View>
              <Text style={{ color: 'white' }}>avatar</Text>
            </View>
            <View>
              <Text style={{ color: 'white' }}>User Name</Text>
              <Text style={{ color: 'white' }}>User ID</Text>
            </View>
            <View style={[Layout.row, Layout.justifyContentBetween]}>
              <Text style={{ color: 'white' }}>Bell Icon</Text>
              <Text style={{ color: 'white' }}>Notification Icon</Text>
            </View>
          </View>
        </View>
      </GradientBox>

      <BoxWallet style={[]} />
    </>
  );
};

export default BoxHeader;
