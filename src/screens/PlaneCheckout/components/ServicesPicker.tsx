import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import { useSelector } from 'react-redux';
import { Colors } from '@/theme/Variables';
import { IconBox, DividerButtonForm, Icon } from '@/components';
import { ScrollView } from 'react-native-gesture-handler';

interface IServicesPickerProps {
  services: 'BAGGAGE' | 'MEAL' | 'SEAT';
}

const PlaneHoldTime: FC<IServicesPickerProps> = ({ services }) => {
  const { Gutters, Layout, Fonts } = useTheme();
  const flightInfo = useSelector((state: any) => state.flight);
  const { flightTotalPrice } = flightInfo;

  return (
    <View
      style={[
        Layout.center,
        { width: 'auto', backgroundColor: Colors.textGray200 },
      ]}
    >
      {/* <IconBox /> */}
    </View>
  );
};

export default PlaneHoldTime;
