import React, { useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { InputForm, Button } from '@/components';
import { useTheme } from '@/hooks';
import { Colors } from '@/theme/Variables';
import MoneyBox from './components/MoneyBox';
import Guide from './components/Guide';
import { valuePick } from './ulities';

const Topup = () => {
  const [value, setValue] = useState<Number>(0);
  const { Gutters, Layout, darkMode: isDark } = useTheme();
  const { t } = useTranslation(['dashboard']);

  return (
    <View
      style={[
        Layout.fill,
        Layout.fullWidth,
        Layout.justifyContentBetween,
        { backgroundColor: Colors.white },
      ]}
    >
      <View>
        <Guide type="money" />
        <View
          style={[
            Layout.row,
            Layout.fullWidth,
            { paddingLeft: 10, paddingRight: 10 },
          ]}
        >
          {valuePick.map((value, index) => (
            <MoneyBox key={index} value={value} />
          ))}
        </View>
        <View>
          <InputForm
            onChangeText={setValue}
            icon={''}
            keyboardType="numeric"
            styles={[Gutters.largeTMargin]}
            placeholder={t('topupItems.amount')}
          />
        </View>
        <Guide type="banking" />
      </View>

      <Button
        viewStyle={[Gutters.smallBMargin]}
        title={t('topupItems.confirm')}
        type="primary"
        align="center"
        radius={30}
      />
    </View>
  );
};

export default Topup;
