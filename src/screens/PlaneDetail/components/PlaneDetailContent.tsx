import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { useTheme } from '@/hooks';
import { PlaneTicketClass } from './PlaneDetailBody';

const PlaneDetailContent: React.FC = ({ navigation }: any) => {
  const { Layout } = useTheme();
  const { height } = useWindowDimensions();

  return (
    <View
      style={[
        Layout.fullWidth,
        Layout.fullHeight,
        { paddingBottom: height * 0.16 },
      ]}
    >
      <PlaneTicketClass navigation={navigation} />
    </View>
  );
};

export default PlaneDetailContent;
