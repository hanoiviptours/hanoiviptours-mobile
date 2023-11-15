import React, { useCallback, useMemo } from 'react';
import { View, useWindowDimensions, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTheme } from '@/hooks'; // updated import
import { TouchableOpacity } from 'react-native-gesture-handler';
import { formatMoney } from '@/utils';

interface MoneyBoxProps {
  value: number;
}

const MoneyBox: React.FC<MoneyBoxProps> = ({ value }) => {
  const { height } = useWindowDimensions();
  const { Fonts, Gutters, Layout, darkMode: isDark } = useTheme();
  const dispatch = useDispatch();

  return (
    <View style={[Layout.fill]}>
      <View style={[Layout.fill, Layout.col, { margin: 3 }]}>
        <TouchableOpacity
          style={[
            Layout.justifyContentCenter,
            {
              width: '100%',
              borderWidth: 1,
              height: height * 0.05,
              borderColor: '#D6D6D6',
              borderRadius: 3,
            },
          ]}
        >
          <Text style={[Fonts.textCenter]}>{formatMoney(value, 'VND')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MoneyBox;
